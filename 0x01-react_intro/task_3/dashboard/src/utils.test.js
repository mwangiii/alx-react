import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
test('getFooterCopy returns the correct string for true', () => {
  const result = getFooterCopy(true);
  expect(result).toBe('Holberton School');
});

test('getFooterCopy returns the correct string for false', () => {
  const result = getFooterCopy(false);
  expect(result).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('getLatestNotification returns the correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});
