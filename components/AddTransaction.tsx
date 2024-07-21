"use client";
import addTransaction from "@/app/actions/addTransaction";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddTransaction = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { error } = await addTransaction(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added successfully!");
      formRef.current?.reset();
    }
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step={"0.01"}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
