export const randomNumber = (num: number = 999999): number => {
  // return Math.floor(Math.random() * num)
  //
  // Generate a number between 100000 (inclusive) and 999999 (exclusive)
  const randomNum = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000

  // Ensure the number has 6 digits by padding with zeros (if necessary)
  return randomNum
}

export const randomOTP: string = randomNumber().toString().padStart(6, "0")
