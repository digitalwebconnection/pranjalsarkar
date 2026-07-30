/**
 * General utility functions.
 */

import { type ClassValue } from '../types';

/**
 * Conditionally join class names (lightweight clsx alternative).
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(' ');
}
