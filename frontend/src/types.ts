export type ClassValue = string | number | boolean | undefined | null;

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  company?: string;
  message?: string;
  status: 'NEW' | 'QUALIFIED' | 'NOT_QUALIFIED' | 'OPPORTUNITY' | 'CONVERTED';
  notes?: string;
  zoomLink?: string;
  zoomDate?: string;
  whatsappAdded?: boolean;
  paymentStatus?: 'PENDING' | 'RECEIVED';
  confirmationEmailSent?: boolean;
  createdAt: string;
  updatedAt: string;
  statusHistory?: Array<{
    from: string;
    to: string;
    changedAt: string;
    note: string;
  }>;
}
