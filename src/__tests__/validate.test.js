import { badRequest, isValidCalendarId, isValidUserId } from '../../functions/_lib/validate.js';

describe('isValidCalendarId', () => {
  it('accepts ids from 3 to 64 allowed characters', () => {
    expect(isValidCalendarId('abc')).toBe(true);
    expect(isValidCalendarId('My-Cal-123')).toBe(true);
    expect(isValidCalendarId('a'.repeat(64))).toBe(true);
  });

  it('rejects ids that are too short, too long, or contain disallowed values', () => {
    for (const id of ['ab', 'a'.repeat(65), 'a/b', 'a?b', 'a b', '', null, 123]) {
      expect(isValidCalendarId(id)).toBe(false);
    }
  });
});

describe('isValidUserId', () => {
  it('accepts names up to 60 characters, including spaces and accents', () => {
    expect(isValidUserId('Ana')).toBe(true);
    expect(isValidUserId('José María')).toBe(true);
    expect(isValidUserId('A'.repeat(60))).toBe(true);
  });

  it('rejects empty, overlong, unsafe, and non-string names', () => {
    for (const id of ['', 'A'.repeat(61), 'Ana<María', 'Ana>María', 'Ana\nMaría', 123, null]) {
      expect(isValidUserId(id)).toBe(false);
    }
  });
});

describe('badRequest', () => {
  it('returns a JSON 400 response with the supplied error', async () => {
    const response = badRequest('x');

    expect(response.status).toBe(400);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    await expect(response.json()).resolves.toEqual({ ok: false, error: 'x' });
  });
});
