import React, { createContext, useReducer } from "react";

import Reducer from "./reducer";

const initialStateDefault = {
  example: null,
};

const initialState = initialStateDefault;

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
