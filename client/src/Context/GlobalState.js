import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
//Initial state

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions");
      console.log("here");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTIONS",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/v1/transactions",
        transaction,
        config
      );
      dispatch({
        type: "ADD_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
        alert('Please enter value');
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
