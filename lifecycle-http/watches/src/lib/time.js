const TWO_DIGIT_FORMATTER = new Intl.NumberFormat('ru-RU', {
  minimumIntegerDigits: 2,
  useGrouping: false,
})

export function normalizeTimezoneOffset(value) {
  const offset = Number.parseFloat(String(value).trim())

  return Number.isFinite(offset) ? offset : null
}

export function formatTimeForTimezone(timezoneOffset, date = new Date()) {
  const targetDate = new Date(date.getTime() + timezoneOffset * 60 * 60 * 1000)

  return [
    targetDate.getUTCHours(),
    targetDate.getUTCMinutes(),
    targetDate.getUTCSeconds(),
  ]
    .map((part) => TWO_DIGIT_FORMATTER.format(part))
    .join(':')
}
