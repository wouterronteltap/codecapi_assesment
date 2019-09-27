import React, { useEffect } from 'react';
import { History } from "history";

import { useAppState } from "../../context";
import { UserDetails } from './details';
import { useApi } from "../../hooks/useApi";

import { CONSTANTS } from "../../utils/contants";
import {Typography} from "@material-ui/core";

interface IProps {
    login: string,
    history: History
}

const DetailsContainer = (props: IProps) => {
    const { login, history } = props;
    const { data, isError, isLoading, error } = useAppState();
    const url = CONSTANTS.GET_USER_DETAILS_URL+login;
    const [setUrl] = useApi(url);
    useEffect(() => {
        setUrl(url)
    }, [login]);
    return(
        <>
            {data && !isLoading && !isError && <UserDetails data={ data } history={history}/>}
            {isLoading && <Typography variant={'body1'}>loading ...</Typography>}
            {isError && <Typography variant={'body1'}>{error}</Typography>}
        </>
    )
};

export { DetailsContainer };