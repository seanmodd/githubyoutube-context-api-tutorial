import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: [],
};

// Create Context
export const CrudContext = createContext(initialState);

// Provider Component
export const CrudProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    });
  };

  return (
    <CrudContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
