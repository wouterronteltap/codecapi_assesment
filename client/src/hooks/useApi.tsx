import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAppDispatch } from '../context';


export const useApi = (url: string = '') => {
    const [query, setQuery] = useState(url);
    const { dispatch } = useAppDispatch();
    useEffect(() => {
        let canceled = false;
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT', payload: undefined });
            try {
                const result = await axios(query);
                if (!canceled) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                }
            } catch (error) {
                if (!canceled) {
                    dispatch({ type: 'FETCH_FAILURE', payload: undefined });
                }
            }
        };
        if(query) {
            fetchData();
        }
        return () => {
            canceled = true;
        };
    }, [query]);

    return [setQuery];
};