import { describe, expect, test } from 'vitest';
import { prepareMonthList, prepareSortedList, prepareYearList } from './prepareData.js';

const list = [
  { date: '2018-02-13', amount: 9 },
  { date: '2018-01-13', amount: 10 },
  { date: '2018-01-09', amount: 5 },
  { date: '2017-12-14', amount: 14 },
  { date: '2018-03-01', amount: 13 },
];

describe('prepareMonthList', () => {
  test('groups months for the latest year and sorts by month', () => {
    expect(prepareMonthList(list)).toEqual([
      { month: 'Jan', amount: 15 },
      { month: 'Feb', amount: 9 },
      { month: 'Mar', amount: 13 },
    ]);
  });
});

describe('prepareYearList', () => {
  test('groups amounts by year and sorts ascending', () => {
    expect(prepareYearList(list)).toEqual([
      { year: 2017, amount: 14 },
      { year: 2018, amount: 37 },
    ]);
  });
});

describe('prepareSortedList', () => {
  test('sorts rows by amount descending', () => {
    expect(prepareSortedList(list)).toEqual([
      { date: '2017-12-14', amount: 14 },
      { date: '2018-03-01', amount: 13 },
      { date: '2018-01-13', amount: 10 },
      { date: '2018-02-13', amount: 9 },
      { date: '2018-01-09', amount: 5 },
    ]);
  });
});
