import apiClient from './client';

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  role?: string;
  company?: string;
  message?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  lead?: {
    id: string;
    name: string;
    email: string;
    status: string;
  };
}

import type { Lead } from '../types';

export interface LeadsListResponse {
  success: boolean;
  leads: Lead[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface LeadStatsResponse {
  success: boolean;
  stats: {
    total: number;
    NEW: number;
    QUALIFIED: number;
    NOT_QUALIFIED: number;
    OPPORTUNITY: number;
    CONVERTED: number;
  };
}

/**
 * Submit a new lead from the public contact form.
 */
export const submitLead = (data: LeadFormData) =>
  apiClient.post<LeadResponse>('/api/leads', data);

/**
 * Get all leads (admin).
 */
export const getLeads = (params?: Record<string, string>) =>
  apiClient.get<LeadsListResponse>('/api/leads', { params });

/**
 * Get lead statistics (admin).
 */
export const getLeadStats = () =>
  apiClient.get<LeadStatsResponse>('/api/leads/stats');

/**
 * Update lead status (admin).
 */
export const updateLeadStatus = (id: string, status: string, note?: string) =>
  apiClient.put(`/api/leads/${id}/status`, { status, note });

/**
 * Update lead details (admin).
 */
export const updateLead = (id: string, data: Record<string, unknown>) =>
  apiClient.put(`/api/leads/${id}`, data);

/**
 * Delete a lead (admin).
 */
export const deleteLead = (id: string) =>
  apiClient.delete(`/api/leads/${id}`);
