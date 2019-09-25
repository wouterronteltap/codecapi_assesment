import {Dispatch} from "react";

// TODO REWRITE PER ACTION
export interface IAction {
    type: string;
    // TODO => PROPER TYPE FOR PAYLOAD
    payload?: any;
}

export interface ILinks {
    last?: string,
    next?: string
}

export type IUser = {
    login: string,
    id: number,
    score?: number,
    avatar_url?: string,
    company?: string,
    email?: string,
    followers: number,
    following: number,
    name?: string,
    location?: string,
    bio?: string,
    blog?: string,
    repos_url: string,
    html_url: string

}

export interface IUsersResponse {
    users:  Array<IUser>,
    links: ILinks,
    total: number
}

export interface IState<T> {
    query: string,
    currentPage: number,
    total: number,
    lastPage: number,
    isLoading: boolean;
    isError: boolean;
    data?: T;
}

export interface IDispatch {
    dispatch: Dispatch<IAction>;
}
