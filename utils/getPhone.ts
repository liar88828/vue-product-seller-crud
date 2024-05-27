export default (number: string) => {
  const countryCode = "+64"
  const part1 = number.slice(0, 4)
  const part2 = number.slice(4, 8)
  const part3 = number.slice(8)

  return `${countryCode}-${part1}-${part2}-${part3}`
}
