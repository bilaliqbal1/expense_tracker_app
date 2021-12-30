import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
const Transaction = ({transaction}) => {

  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0  ? "plus" : "minus"; 
  return (
    <li className={sign}>
      {transaction.text} <span>{transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
