import axios, { AxiosResponse } from 'axios';
import { CONSTANTS } from "../routes/utils";

interface IParams {
    query: string,
    page?: string
}

const fetchUsers = async (params: IParams): Promise<AxiosResponse> => {
    const page: string = params.page || '1';
    try{
        return await axios(CONSTANTS.GET_USERS_URL(params.query, page));
    }catch (e) {
        console.log(e);
        return e
    }
}

const fetchUser = async (params: IParams): Promise<AxiosResponse> => {
    console.log(params.query);
    try{
        return await axios(CONSTANTS.GET_USER_DETAILS_URL(params.query));
    }catch (e) {
        console.log(e);
        return e
    }
}

export { fetchUsers, fetchUser }