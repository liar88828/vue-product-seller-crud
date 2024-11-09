export function usePhoneNumberFormatter(defaultPhone: string = "") {
  const phoneNumber = ref(defaultPhone)

  const formatPhoneNumber = (): string => {
    const cleaned = phoneNumber.value.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})(\d{1})$/)
    if (match) {
      phoneNumber.value = `(${match[1]}) ${match[2]} ${match[3]} ${match[4]}`
    }
    return phoneNumber.value
  }

  return {
    phoneNumber,
    formatPhoneNumber,
  }
}
