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
        return e.response;
    }
}

const fetchUser = async (params: IParams): Promise<AxiosResponse> => {
    try{
        return await axios(CONSTANTS.GET_USER_DETAILS_URL(params.query));
    }catch (e) {
        return e.response;
    }
}

export { fetchUsers, fetchUser }