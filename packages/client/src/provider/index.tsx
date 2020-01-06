import React from "react";

import { appReducer } from "../reducer";
import { AppStateContext, AppDispatchContext, initialState } from "../context";

interface IProps {
  children?: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={{ dispatch }}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export { AppProvider };
