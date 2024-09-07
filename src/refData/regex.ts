export const DIGITS_ONLY_REGEX = /^\d+$/;

export const digitsOnly = (value: string) => DIGITS_ONLY_REGEX.test(value);
