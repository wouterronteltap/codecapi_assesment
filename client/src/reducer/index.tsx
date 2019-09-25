import {parse, ParsedUrlQuery} from 'querystring';
import { IUsersResponse, IUser, IState, IAction } from "../types";

// TODO FIX THIS
export const appReducer = (state: IState<any>, action: IAction) :IState<any> => {
    const {payload} = action;
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, isLoading: true, isError: false};
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case 'SET_DEBOUNCED_QUERY': {
            return {
                ...state,
                query: payload.query,
                currentPage: 1
            }
        }
        case 'SET_PAGE': {
            return {
                ...state,
                currentPage: payload
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}