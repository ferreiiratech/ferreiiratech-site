export const getGreeting = (): string => {
  const currentHour = new Date().getHours()
  if (currentHour > 5 && currentHour <= 12) {
    return "bom dia"
  }
  if (currentHour > 12 && currentHour <= 18) {
    return "boa tarde"
  }
  return "boa noite"
}
