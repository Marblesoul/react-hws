import { describe, expect, test } from 'vitest';
import { formatElapsedTime, getPluralForm } from './dateTime.js';

describe('getPluralForm', () => {
  test('returns correct minute forms', () => {
    expect(getPluralForm(1, ['минута', 'минуты', 'минут'])).toBe('минута');
    expect(getPluralForm(2, ['минута', 'минуты', 'минут'])).toBe('минуты');
    expect(getPluralForm(5, ['минута', 'минуты', 'минут'])).toBe('минут');
    expect(getPluralForm(11, ['минута', 'минуты', 'минут'])).toBe('минут');
    expect(getPluralForm(21, ['минута', 'минуты', 'минут'])).toBe('минута');
  });
});

describe('formatElapsedTime', () => {
  const now = new Date('2024-01-02T12:00:00');

  test('formats elapsed minutes below one hour', () => {
    expect(formatElapsedTime('2024-01-02 11:45:00', now)).toBe('15 минут назад');
  });

  test('formats elapsed hours below one day', () => {
    expect(formatElapsedTime('2024-01-02 07:00:00', now)).toBe('5 часов назад');
  });

  test('formats elapsed days after one day', () => {
    expect(formatElapsedTime('2023-12-30 12:00:00', now)).toBe('3 дня назад');
  });
}
);
