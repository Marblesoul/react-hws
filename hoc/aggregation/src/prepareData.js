const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getYear(date) {
  return new Date(date).getFullYear();
}

function getMonthIndex(date) {
  return new Date(date).getMonth();
}

export function prepareMonthList(list) {
  if (list.length === 0) {
    return [];
  }

  const latestYear = Math.max(...list.map((item) => getYear(item.date)));
  const groupedByMonth = list
    .filter((item) => getYear(item.date) === latestYear)
    .reduce((acc, item) => {
      const monthIndex = getMonthIndex(item.date);
      acc.set(monthIndex, (acc.get(monthIndex) ?? 0) + item.amount);
      return acc;
    }, new Map());

  return [...groupedByMonth.entries()]
    .sort(([firstMonth], [secondMonth]) => firstMonth - secondMonth)
    .map(([monthIndex, amount]) => ({
      month: MONTH_NAMES[monthIndex],
      amount,
    }));
}

export function prepareYearList(list) {
  const groupedByYear = list.reduce((acc, item) => {
    const year = getYear(item.date);
    acc.set(year, (acc.get(year) ?? 0) + item.amount);
    return acc;
  }, new Map());

  return [...groupedByYear.entries()]
    .sort(([firstYear], [secondYear]) => firstYear - secondYear)
    .map(([year, amount]) => ({ year, amount }));
}

export function prepareSortedList(list) {
  return [...list].sort((firstItem, secondItem) => secondItem.amount - firstItem.amount);
}
