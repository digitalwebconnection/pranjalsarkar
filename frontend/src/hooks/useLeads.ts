import { useState, useEffect, useCallback } from 'react';
import { getLeads, getLeadStats, type LeadsListResponse, type LeadStatsResponse } from '../api/leads.api';

/**
 * Custom hook for fetching and managing leads data.
 */
export function useLeads(params?: Record<string, string>) {
  const [leads, setLeads] = useState<LeadsListResponse['leads']>([]);
  const [stats, setStats] = useState<LeadStatsResponse['stats'] | null>(null);
  const [pagination, setPagination] = useState<LeadsListResponse['pagination'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getLeads(params);
      setLeads(response.leads);
      setPagination(response.pagination);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  const fetchStats = useCallback(async () => {
    try {
      const response = await getLeadStats();
      setStats(response.stats);
    } catch (err: any) {
      console.error('Failed to fetch lead stats:', err.message);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
    fetchStats();
  }, [fetchLeads, fetchStats]);

  return { leads, stats, pagination, isLoading, error, refetch: fetchLeads, refetchStats: fetchStats };
}

export default useLeads;
