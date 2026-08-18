export interface Ticket {
  ticketId: number;
  productId: number;
  categoryId: number;
  subject: string;
  body: string;
  status: 'open' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  resolvedAt: string | null;
}
