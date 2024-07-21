import getUserBalance from "@/app/actions/getUserBalance";
import { formatAmount } from "@/lib/utils";
import React from "react";

const Balance = async () => {
  const { balance, error } = await getUserBalance();
  return (
    <>
      <h4>Your Balance:</h4>
      {!error ? <h1>{formatAmount(balance) ?? 0}</h1> : <h1>{error}</h1>}
    </>
  );
};

export default Balance;
