import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, CheckCircle2 } from "lucide-react";
import { API_URL } from "../../config";
import { type Lead, type LeadStatsResponse } from "./types";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { OverviewTab } from "./components/OverviewTab";
import { LeadsTab } from "./components/LeadsTab";
import { LeadModal } from "./components/LeadModal";
import { LogoutModal } from "./components/LogoutModal";
import { Helmet } from "react-helmet-async";

export const AdminPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("adminToken"),
  );
  const [activeTab, setActiveTab] = useState<"overview" | "leads">("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadStats, setLeadStats] = useState<LeadStatsResponse | null>(null);
  const [loadingLeads, setLoadingLeads] = useState(true);

  const [leadSearchQuery, setLeadSearchQuery] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState("All");

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isUpdatingLead, setIsUpdatingLead] = useState(false);
  const [leadNotes, setLeadNotes] = useState("");
  const [newNoteText, setNewNoteText] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [dateFilter, setDateFilter] = useState("All");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [
    leadStatusFilter,
    leadSearchQuery,
    dateFilter,
    customStartDate,
    customEndDate,
  ]);

  // Fetch Logic
  const fetchLeads = useCallback(async () => {
    if (!token) return;
    try {
      setLoadingLeads(true);
      const params = new URLSearchParams();
      if (leadStatusFilter !== "All") params.append("status", leadStatusFilter);
      if (leadSearchQuery) params.append("search", leadSearchQuery);
      params.append("page", currentPage.toString());
      params.append("limit", "10");
      if (dateFilter !== "All") {
        params.append("dateFilter", dateFilter);
        if (dateFilter === "Custom" && customStartDate && customEndDate) {
          params.append("startDate", customStartDate);
          params.append("endDate", customEndDate);
        }
      }

      const response = await fetch(
        `${API_URL}/api/leads?${params.toString()}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setLeads(data.leads || []);
        if (data.pagination) setTotalPages(data.pagination.totalPages || 1);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoadingLeads(false);
    }
  }, [
    token,
    leadStatusFilter,
    leadSearchQuery,
    currentPage,
    dateFilter,
    customStartDate,
    customEndDate,
  ]);

  const fetchLeadStats = useCallback(async () => {
    if (!token) return;
    try {
      const response = await fetch(`${API_URL}/api/leads/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setLeadStats(await response.json());
      }
    } catch (err) {
      console.error("Error fetching lead stats:", err);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchLeads();
      fetchLeadStats();
    }
  }, [token, fetchLeads, fetchLeadStats]);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("adminToken", newToken);
  };

  const confirmLogout = () => {
    setToken(null);
    localStorage.removeItem("adminToken");
    setIsLogoutModalOpen(false);
  };

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_URL}/api/leads/${leadId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        fetchLeads();
        fetchLeadStats();
        if (selectedLead && selectedLead._id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus as any });
        }
      }
    } catch (err) {
      console.error(err);
      setToastMessage("Failed to update status");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleUpdateLeadDetails = async () => {
    if (!selectedLead) return;
    setIsUpdatingLead(true);

    let finalNotes = leadNotes;
    if (newNoteText.trim()) {
      const dateStr = new Date().toLocaleString();
      const newEntry = `[${dateStr}]\n${newNoteText.trim()}`;
      finalNotes = finalNotes ? `${finalNotes}|||${newEntry}` : newEntry;
    }

    try {
      const response = await fetch(`${API_URL}/api/leads/${selectedLead._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          notes: finalNotes,
        }),
      });
      if (response.ok) {
        fetchLeads();
        setIsLeadModalOpen(false);
        setToastMessage("Lead details updated successfully!");
        setTimeout(() => setToastMessage(null), 3000);
      }
    } catch (err) {
      console.error(err);
      setToastMessage("Failed to update lead");
      setTimeout(() => setToastMessage(null), 3000);
    } finally {
      setIsUpdatingLead(false);
    }
  };

  const openLeadModal = (lead: Lead) => {
    setSelectedLead(lead);
    setLeadNotes(lead.notes || "");
    setNewNoteText("");
    setIsAddingNote(false);
    setIsLeadModalOpen(true);
  };

  if (!token) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Login onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans text-slate-800 selection:bg-blue-300 selection:text-black">
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <h1 className="text-lg font-black tracking-tight text-slate-800">
          CRM Dashboard
        </h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-md"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        handleLogoutClick={() => setIsLogoutModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full md:h-screen md:overflow-y-auto bg-slate-50 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && <OverviewTab leadStats={leadStats} />}
          {activeTab === "leads" && (
            <LeadsTab
              leads={leads}
              loadingLeads={loadingLeads}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              leadSearchQuery={leadSearchQuery}
              setLeadSearchQuery={setLeadSearchQuery}
              leadStatusFilter={leadStatusFilter}
              setLeadStatusFilter={setLeadStatusFilter}
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
              customStartDate={customStartDate}
              setCustomStartDate={setCustomStartDate}
              customEndDate={customEndDate}
              setCustomEndDate={setCustomEndDate}
              handleStatusChange={handleStatusChange}
              openLeadModal={openLeadModal}
            />
          )}
        </div>
      </main>

      <LeadModal
        selectedLead={selectedLead}
        leadNotes={leadNotes}
        newNoteText={newNoteText}
        setNewNoteText={setNewNoteText}
        isAddingNote={isAddingNote}
        setIsAddingNote={setIsAddingNote}
        isLeadModalOpen={isLeadModalOpen}
        setIsLeadModalOpen={setIsLeadModalOpen}
        handleUpdateLeadDetails={handleUpdateLeadDetails}
        isUpdatingLead={isUpdatingLead}
      />

      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-emerald-600 text-white pl-4 pr-3 py-3 rounded-xl shadow-2xl font-bold text-sm animate-in slide-in-from-bottom-5 fade-in duration-300 z-100 flex items-center justify-between min-w-[320px]">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-200" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-emerald-200 hover:text-white hover:bg-emerald-700 p-1.5 rounded-lg transition-colors ml-4"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <LogoutModal
        isLogoutModalOpen={isLogoutModalOpen}
        setIsLogoutModalOpen={setIsLogoutModalOpen}
        confirmLogout={confirmLogout}
      />
    </div>
  );
};
