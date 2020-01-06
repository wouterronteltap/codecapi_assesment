import { Dispatch } from "react";
import { AxiosResponse, AxiosError } from "axios";

type Actions =
  | "FETCH_INIT"
  | "FETCH_SUCCESS"
  | "FETCH_FAILURE"
  | "SET_PAGE"
  | "SET_DEBOUNCED_QUERY";

export interface IAction {
  type: Actions;
  payload: any;
}

export interface ILinks {
  last?: string;
  next?: string;
}

export type IUser = {
  login: string;
  id: number;
  score?: number;
  avatar_url?: string;
  company?: string;
  email?: string;
  followers: number;
  following: number;
  name?: string;
  location?: string;
  bio?: string;
  repos_url: string;
  html_url: string;
};

export interface IResponse extends AxiosResponse {
  users: Array<IUser>;
  links?: ILinks;
  total?: number;
}

export interface IState {
  query: string;
  currentPage: number;
  total: number;
  lastPage: number;
  isLoading: boolean;
  isError: boolean;
  data: IResponse | null;
  error: AxiosError | null;
}

export interface IDispatch {
  dispatch: Dispatch<IAction>;
}
