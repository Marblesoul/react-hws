const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

export function getPluralForm(value, forms) {
  const lastTwoDigits = value % 100;
  const lastDigit = value % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2];
  }

  if (lastDigit === 1) {
    return forms[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1];
  }

  return forms[2];
}

export function parseDate(date) {
  return new Date(date.replace(' ', 'T'));
}

export function formatElapsedTime(date, now = new Date()) {
  const publishedAt = parseDate(date);
  const diffInMinutes = Math.max(
    0,
    Math.floor((now.getTime() - publishedAt.getTime()) / 1000 / 60),
  );

  if (diffInMinutes < MINUTES_IN_HOUR) {
    return `${diffInMinutes} ${getPluralForm(diffInMinutes, ['минута', 'минуты', 'минут'])} назад`;
  }

  const diffInHours = Math.floor(diffInMinutes / MINUTES_IN_HOUR);

  if (diffInHours < HOURS_IN_DAY) {
    return `${diffInHours} ${getPluralForm(diffInHours, ['час', 'часа', 'часов'])} назад`;
  }

  const diffInDays = Math.floor(diffInHours / HOURS_IN_DAY);
  return `${diffInDays} ${getPluralForm(diffInDays, ['день', 'дня', 'дней'])} назад`;
}
