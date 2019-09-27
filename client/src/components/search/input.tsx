import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { History } from 'history';

import { useDebounce } from "../../hooks/useDebounce";
import { CONSTANTS } from "../../utils/contants";

interface IProps {
    search: string,
    history: History,
    urlquery: string
}

const SearchInput = React.memo((props:IProps) => {
    const { history, search, urlquery } = props;
    const [query, setQuery] = useState('');
    const debounced = useDebounce(query, 300);
    useEffect(() => {
        if(debounced){
            history.push(CONSTANTS.QUERY_TEMPLATE(debounced));
        }
    }, [debounced]);
    useEffect(() => {
        if(search){
            history.push(search);
        }
    }, []);
    return(
        <TextField
            type={'search'}
            label={'Search user'}
            variant={'outlined'}
            value={urlquery}
            onChange={e => setQuery(e.target.value)}
            placeholder={'Search GitHub user'}
            />
    )
});

export { SearchInput }