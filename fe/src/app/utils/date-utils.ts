const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const getDaysDiff = (day: Date, dayToCompare: Date): number => {
  const utc1 = Date.UTC(day.getFullYear(), day.getMonth(), day.getDate());
  const utc2 = Date.UTC(dayToCompare.getFullYear(), dayToCompare.getMonth(), dayToCompare.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
