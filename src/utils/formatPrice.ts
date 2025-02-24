/**
 * Formats a given number as a price string with two decimal places.
 *
 * @param price - The numeric value to be formatted as a price.
 * @returns A string representing the formatted price with a dollar sign and two decimal places.
 */
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};
