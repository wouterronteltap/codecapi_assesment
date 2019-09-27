import { IState, IAction } from "../types";

export const appReducer = (state: IState, action: IAction) :IState => {
    const {payload} = action;
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
                error: null
            };
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
                isError: true,
                error: payload
            };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}