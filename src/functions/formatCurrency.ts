const formatCurrency = (amt:number) => {
  return (new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })).format(amt);
};

export default formatCurrency;