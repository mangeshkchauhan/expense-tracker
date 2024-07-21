"use client";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { formatAmount } from "@/lib/utils";
import { Transaction } from "@/types/Transactions";
import React from "react";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!confirmed) return;
    const { error, message } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    }
    toast.success(message);
  };
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span className="amount">{formatAmount(transaction.amount)}</span>
      <button
        className="delete-btn"
        onClick={() => handleDeleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
