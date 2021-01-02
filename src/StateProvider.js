//set up data layer
//we need this to track basket

import React, { createContext, useContext, useReducer } from "react";

//THIS IS A DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
