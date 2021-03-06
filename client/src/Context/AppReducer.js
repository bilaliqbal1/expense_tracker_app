export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "TRANSACTIONS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
