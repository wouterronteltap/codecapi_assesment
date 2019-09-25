import React, { useEffect } from 'react';

import { useAppState } from "../../context";
import { UserDetails } from './details';
import { useApi } from "../../hooks/useApi";

import { CONSTANTS } from "../../utils/contants";
import { IUser } from "../../types";

interface IProps {
    login: string
}

// TODO ADDED NEEDED STATE CHANGES AS PROPS
const DetailsContainer = (props: IProps) => {
    const {login} = props;
    const { data, isError, isLoading } = useAppState();
    const url = CONSTANTS.GET_USER_DETAILS_URL(login);
    const [setUrl] = useApi(url);
    useEffect(() => {
        setUrl(url)
    }, [login])
    return(
        <>
            {data && <UserDetails user={ data }/>}
            {isLoading && <h1>loading ...</h1>}
            {isError && <h1>Something went wrong</h1>}
        </>
    )
};

export { DetailsContainer };