export const linearNumberFormat = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M"; // Format numbers larger than or equal to 1,000,000 as 1M, 1.5M, etc.
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K"; // Format numbers larger than or equal to 1,000 as 1K, 1.5K, etc.
  } else {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format numbers less than 1,000 with commas
  }
};

export const linearTextFormat = (number: number, text: string) => {
  return linearNumberFormat(number) + " " + text; // Combine the formatted number with the text label (e.g. "1.2M Followers")
};

