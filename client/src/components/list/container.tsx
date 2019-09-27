import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import {RouterProps} from "react-router";
import queryString from 'query-string';

import { SearchInput } from "../search/input";
import { UserList } from "./list";
import { PaginationContainer } from "./pagination/container";

import { useAppState } from "../../context";
import { useApi } from "../../hooks/useApi";
import { CONSTANTS } from '../../utils/contants';

const destructQueryString = (search: string) => {
    const parsed = queryString.parse(search);
    let pageParam = parsed.page ? parseInt(parsed.page as string) : 1
    let queryParam = parsed.query ? parsed.query as string : '';
    return { query: queryParam, page: pageParam }
}

const ListContainer = ({history}:RouterProps) => {
    const { isLoading, isError, data, error } = useAppState();
    const { search } = history.location;
    const current = destructQueryString(search);
    const [setUrl]  = useApi();
    useEffect(() => {
        if(search){
            const url = CONSTANTS.GET_USERS_URL+search;
            setUrl(url)
        }
    }, [search])
    return(
        <div style={{width: 500}}>
            <Typography variant={'h6'}>Welcome to the GitHub User Search App!</Typography>
            <SearchInput search={search} history={history} urlquery={current.query}/>
            {!data && !error && search && !isLoading &&
                <Typography variant={'body1'}>No users available for this query.</Typography>}
            {data && !isLoading &&
                <>
                    <Typography variant={'body1'}>Query result: {data.total} users</Typography>
                    <UserList data={ data }/>
                    <PaginationContainer links={data.links} history={history} currentpage={current.page}/>
                </>}

            {isLoading && <Typography variant={'body1'}>loading ...</Typography>}
            {isError && <Typography variant={'body1'}>{error}</Typography>}
        </div>
    )
}

export { ListContainer };