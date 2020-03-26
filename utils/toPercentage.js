const toPercentage = (value = 0, total = 0) => {
  const percentage  = (value / total) * 100 || 0
  return `${percentage.toFixed(2)}%`;
}

export {
  toPercentage
}