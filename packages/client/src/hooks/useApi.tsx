import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { useAppDispatch } from "../context";
import { IResponse } from "../types";

export const useApi = (url: string = "") => {
  const [query, setQuery] = useState(url);
  const { dispatch } = useAppDispatch();
  useEffect(() => {
    let canceled = false;
    const fetchData = async (): Promise<void> => {
      dispatch({ type: "FETCH_INIT", payload: undefined });
      try {
        const result: AxiosResponse<IResponse> = await axios(query);
        if (!canceled) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!canceled) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      }
    };
    if (query) {
      fetchData();
    }
    return () => {
      canceled = true;
    };
  }, [query]);

  return [setQuery];
};
