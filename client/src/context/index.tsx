import React from "react";
import {IDispatch, IState } from "../types";


const initialState = {
    query: '',
    currentPage: 1,
    total: 0,
    lastPage: 0,
    isLoading: false,
    isError: false,
    data: null,
    error: null
};

const initialDispatch = {
    dispatch: () => {}
};

const AppStateContext = React.createContext<IState>(initialState);
const AppDispatchContext = React.createContext<IDispatch>(initialDispatch);
// const AppDispatchContext = React.createContext<Dispatch<IAction>>({} as Dispatch<IAction>);

const useAppState = () => {
    const context = React.useContext(AppStateContext)
    if (context === undefined) {
        throw new Error('AppContext must be used within an AppProvider')
    }
    return context
};


const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext)
    if (context === undefined) {
        throw new Error('AppDispatchContext must be used within an AppProvider')
    }
    return context
};

export {useAppState, useAppDispatch, AppStateContext, AppDispatchContext, initialState}