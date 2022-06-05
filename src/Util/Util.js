export const calculateCart = cart => {
  if (cart.length === 0)
    return {
      subTotal: '00.00',
      tax: '00.00',
      total: '00.00',
    }
  const subTotal = cart.reduce((prev, curr) => {
    curr = curr.amount * curr.price
    return prev + curr
  }, 0)

  const tax = subTotal * 0.19
  const total = subTotal + tax

  return {
    subTotal: subTotal.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
    tax: tax.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
    total: total.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }),
  }
}
