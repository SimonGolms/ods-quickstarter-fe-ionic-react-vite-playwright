import { expect, test } from '@playwright/experimental-ct-react';
import { getGreetingTextByHour, GREETING } from './Greeter.utils';

test.describe.parallel('Greeter', () => {
  test('Hour: 00:00', () => {
    expect(getGreetingTextByHour(0)).toBe(GREETING.EVENING);
  });
  test('Hour: 01:00', () => {
    expect(getGreetingTextByHour(1)).toBe(GREETING.EVENING);
  });
  test('Hour: 02:00', () => {
    expect(getGreetingTextByHour(2)).toBe(GREETING.EVENING);
  });
  test('Hour: 03:00', () => {
    expect(getGreetingTextByHour(3)).toBe(GREETING.EVENING);
  });
  test('Hour: 04:00', () => {
    expect(getGreetingTextByHour(4)).toBe(GREETING.MORNING);
  });
  test('Hour: 05:00', () => {
    expect(getGreetingTextByHour(5)).toBe(GREETING.MORNING);
  });
  test('Hour: 06:00', () => {
    expect(getGreetingTextByHour(6)).toBe(GREETING.MORNING);
  });
  test('Hour: 07:00', () => {
    expect(getGreetingTextByHour(7)).toBe(GREETING.MORNING);
  });
  test('Hour: 08:00', () => {
    expect(getGreetingTextByHour(8)).toBe(GREETING.MORNING);
  });
  test('Hour: 09:00', () => {
    expect(getGreetingTextByHour(9)).toBe(GREETING.MORNING);
  });
  test('Hour: 10:00', () => {
    expect(getGreetingTextByHour(10)).toBe(GREETING.FORENOON);
  });
  test('Hour: 11:00', () => {
    expect(getGreetingTextByHour(11)).toBe(GREETING.FORENOON);
  });
  test('Hour: 12:00', () => {
    expect(getGreetingTextByHour(12)).toBe(GREETING.MIDDAY);
  });
  test('Hour: 13:00', () => {
    expect(getGreetingTextByHour(13)).toBe(GREETING.MIDDAY);
  });
  test('Hour: 14:00', () => {
    expect(getGreetingTextByHour(14)).toBe(GREETING.MIDDAY);
  });
  test('Hour: 15:00', () => {
    expect(getGreetingTextByHour(15)).toBe(GREETING.AFTERNOON);
  });
  test('Hour: 16:00', () => {
    expect(getGreetingTextByHour(16)).toBe(GREETING.AFTERNOON);
  });
  test('Hour: 17:00', () => {
    expect(getGreetingTextByHour(17)).toBe(GREETING.AFTERNOON);
  });
  test('Hour: 18:00', () => {
    expect(getGreetingTextByHour(18)).toBe(GREETING.EVENING);
  });
  test('Hour: 19:00', () => {
    expect(getGreetingTextByHour(19)).toBe(GREETING.EVENING);
  });
  test('Hour: 20:00', () => {
    expect(getGreetingTextByHour(20)).toBe(GREETING.EVENING);
  });
  test('Hour: 21:00', () => {
    expect(getGreetingTextByHour(21)).toBe(GREETING.EVENING);
  });
  test('Hour: 22:00', () => {
    expect(getGreetingTextByHour(22)).toBe(GREETING.EVENING);
  });
  test('Hour: 23:00', () => {
    expect(getGreetingTextByHour(23)).toBe(GREETING.EVENING);
  });
  test('Hour: 42:00', () => {
    expect(getGreetingTextByHour(42)).toBe(GREETING.DEFAULT);
  });
  test('Hour: -1', () => {
    expect(getGreetingTextByHour(-1)).toBe(GREETING.DEFAULT);
  });
  test('Hour: undefined', () => {
    expect(getGreetingTextByHour()).toBe(GREETING.DEFAULT);
  });
});
