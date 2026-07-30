/**
 * Application-wide constants.
 */

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const LEAD_STATUSES = {
  NEW: 'NEW',
  QUALIFIED: 'QUALIFIED',
  NOT_QUALIFIED: 'NOT_QUALIFIED',
  OPPORTUNITY: 'OPPORTUNITY',
  CONVERTED: 'CONVERTED',
} as const;

export const LEAD_STATUS_LABELS: Record<string, string> = {
  NEW: 'New',
  QUALIFIED: 'Qualified',
  NOT_QUALIFIED: 'Not Qualified',
  OPPORTUNITY: 'Opportunity',
  CONVERTED: 'Converted',
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 50,
};
