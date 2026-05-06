import { describe, expect, test } from 'vitest';
import { getHighlightType } from './highlight.js';

describe('getHighlightType', () => {
  test('marks items with 100 views or fewer as new', () => {
    expect(getHighlightType(50)).toBe('new');
    expect(getHighlightType(100)).toBe('new');
  });

  test('marks items with 1000 views or more as popular', () => {
    expect(getHighlightType(1000)).toBe('popular');
    expect(getHighlightType(1532)).toBe('popular');
  });

  test('does not mark medium-view items', () => {
    expect(getHighlightType(175)).toBe('regular');
  });
});
