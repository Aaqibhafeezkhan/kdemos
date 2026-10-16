import { formatDayLong } from './locales';

describe('formatDayLong', () => {
  it.each([
    [new Date(2026, 0, 16), 'divendres, 16 de gener'],
    [new Date(2026, 3, 16), 'dijous, 16 d’abril'],
    [new Date(2026, 7, 16), 'diumenge, 16 d’agost'],
    [new Date(2026, 9, 16), 'divendres, 16 d’octubre'],
  ])('formats Catalan dates correctly for %s', (date, expected) => {
    expect(formatDayLong(date, 'ca')).toBe(expected);
  });

  it('preserves Spanish date formatting', () => {
    expect(formatDayLong(new Date(2026, 3, 16), 'es')).toBe('jueves, 16 de abril');
  });

  it('preserves English date formatting', () => {
    expect(formatDayLong(new Date(2026, 3, 16), 'en')).toBe('Thursday, April 16');
  });
});
