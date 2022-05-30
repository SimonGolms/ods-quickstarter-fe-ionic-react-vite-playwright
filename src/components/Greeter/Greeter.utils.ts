export const GREETING = {
  AFTERNOON: 'Good afternoon',
  DEFAULT: 'Hello',
  EVENING: 'Good evening',
  FORENOON: 'Hello',
  MIDDAY: 'Hi',
  MORNING: 'Good morning',
};

export const getGreetingTextByHour = (hour = -1) => {
  // Mornings hours are between 4:00 and 10:00
  if (hour >= 4 && hour < 10) {
    return GREETING.MORNING;
  }

  // Forenoon hours are between 10:00 and 12:00
  if (hour >= 10 && hour < 12) {
    return GREETING.FORENOON;
  }

  // Midday hours are between 12:00 and 15:00
  if (hour >= 12 && hour < 15) {
    return GREETING.MIDDAY;
  }

  // Afternoon hours are between 15:00 and 18:00
  if (hour >= 15 && hour < 18) {
    return GREETING.AFTERNOON;
  }

  // Evening hours are between 18:00 and 4:00
  if (hour >= 18 && hour < 24) {
    return GREETING.EVENING;
  }
  if (hour >= 0 && hour < 4) {
    return GREETING.EVENING;
  }

  // Default greeting for an unknown hour
  return GREETING.DEFAULT;
};
