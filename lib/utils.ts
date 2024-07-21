export const formatAmount = (amount?: number) => {
  if (!amount) {
    return '₹0';
  }
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
};