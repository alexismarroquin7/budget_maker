export function formatCurrency(decimalString) {
  const number = parseFloat(decimalString);

  // Check if the number is NaN or not a finite number
  if (isNaN(number) || !isFinite(number)) {
    return '';
  }

  const options = {
    style: 'currency',
    currency: 'USD' // Change currency code to your desired currency
  };

  const res = `${number.toLocaleString('en-US', options)}`;
  return res.slice(1, res.length);
}