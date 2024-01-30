import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  } else if (typeof error === 'string') {
    return error;
  }
  return 'Something went wrong';
};
