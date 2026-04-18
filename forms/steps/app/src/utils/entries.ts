import type { Entry } from '../types';

export function upsertEntry(list: Entry[], entry: Entry, replace = false): Entry[] {
  const exists = list.find((e) => e.date === entry.date);
  let result: Entry[];
  if (exists) {
    result = list.map((e) =>
      e.date === entry.date
        ? { ...e, distance: replace ? entry.distance : e.distance + entry.distance }
        : e
    );
  } else {
    result = [...list, entry];
  }
  return sortDesc(result);
}

export function removeEntry(list: Entry[], date: string): Entry[] {
  return list.filter((e) => e.date !== date);
}

export function sortDesc(list: Entry[]): Entry[] {
  // ISO YYYY-MM-DD sorts correctly as strings
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}
