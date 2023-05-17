// To Fix totalReadingTime. Its always returns positive number
export const totalReadingTimeFixer = (mins: number) => {
  return Math.abs(mins);
};
