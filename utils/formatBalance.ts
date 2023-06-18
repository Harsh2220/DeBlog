const formatBalance = (balance: number): string => {
  if (!balance) return "0.0 MATIC";

  const raw_balance = String(balance / 10 ** 18);
  const raw_balance_array = raw_balance.split(".");
  const int_part = raw_balance_array[0];
  const float_part = raw_balance_array[1]?.slice(0, 4);

  return int_part + "." + float_part + " MATIC";
};
export default formatBalance;
