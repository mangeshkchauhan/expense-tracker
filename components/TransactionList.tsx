import React from "react";
import { Transaction } from "@/types/Transactions";
import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p className="error">Error fetching transactions</p>;
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions ? (
          transactions.map((item, index) => {
            return <TransactionItem key={index} transaction={item} />;
          })
        ) : (
          <>Loading...</>
        )}
      </ul>
    </>
  );
};

export default TransactionList;
