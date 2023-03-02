const formatCurrency = (value: string | number) => {
  return "Rp " + value.toString().replace(/\d(?=(\d{3})+$)/g, "$&.");
};

export default formatCurrency;
