import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

import { SearchInput } from "../search/input";
import { UserList } from "./list";
import { PaginationContainer } from "./pagination/container";

import { useAppState } from "../../context";
import { useApi } from "../../hooks/useApi";

import { CONSTANTS } from "../../utils/contants";

const ListContainer = () => {
  const { query, currentPage, isLoading, isError, data, error } = useAppState();
  const url = CONSTANTS.GET_USERS_URL(query, currentPage);
  const [setUrl] = useApi();
  useEffect(() => {
    if (query) {
      setUrl(url);
    }
  }, [query, currentPage]);
  return (
    <div style={{ width: 500 }}>
      <Typography variant={"h6"}>
        Welcome to the GitHub User Search App!
      </Typography>
      <SearchInput lastquery={query} />
      {!data && !error && query && !isLoading && (
        <Typography variant={"body1"}>
          No users available for this query.
        </Typography>
      )}
      {data && !isLoading && (
        <>
          <Typography variant={"body1"}>
            Query result: {data.total} users
          </Typography>
          <UserList data={data} />
          <PaginationContainer currentPage={currentPage} links={data.links} />
        </>
      )}

      {isLoading && <Typography variant={"body1"}>loading ...</Typography>}
      {isError && <Typography variant={"body1"}>{error}</Typography>}
    </div>
  );
};

export { ListContainer };
