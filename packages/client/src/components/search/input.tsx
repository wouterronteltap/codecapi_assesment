import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

import { useAppDispatch } from "../../context";
import { useDebounce } from "../../hooks/useDebounce";

const SearchInput = React.memo(({ lastquery = "" }: { lastquery: string }) => {
  const { dispatch } = useAppDispatch();
  const [query, setQuery] = useState(lastquery);
  const debounced = useDebounce(query, 300);
  useEffect(() => {
    if (debounced) {
      dispatch({
        type: "SET_DEBOUNCED_QUERY",
        payload: {
          query: debounced
        }
      });
    }
  }, [debounced]);
  return (
    <TextField
      type={"search"}
      label={"Search user"}
      variant={"outlined"}
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder={"Search GitHub user"}
    />
  );
});

export { SearchInput };
