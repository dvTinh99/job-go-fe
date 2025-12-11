export function useMoneyFormat(value?: number | string, plan?: number): string {
  // plan or 0
  const planValue = plan || 0
  // final value = value + 5% * plan
  const finalValue = Number(value) + Number(value) * planValue / 100
  // cenvert to cents and to money format
  return finalValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
