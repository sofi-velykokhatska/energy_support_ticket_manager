import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

export interface Product {
  productId: number;
  name: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {

  private products: Product[] = [
    { productId: 1, name: 'B2C Electricity',                color: '#d5ecff' },
    { productId: 2, name: 'E-Mobility',                     color: '#fef1dd' },
    { productId: 3, name: 'Solar',                   color: '#daefd2' },
    { productId: 4, name: 'Smart Home', color: '#d2cae5' }
  ];

  private tickets: Ticket[] = [
    {
      ticketId: 1,
      productId: 2,
      categoryId: 5,
      subject: 'Charging station not starting',
      body: 'Customer reports the charger fails after the latest app update.',
      status: 'open',
      priority: 'high',
      createdAt: '2026-08-10T09:15:00Z',
      resolvedAt: null
    },
    {
      ticketId: 2,
      productId: 1,
      categoryId: 1,
      subject: 'Billing amount incorrect',
      body: 'Monthly electricity bill is higher than expected.',
      status: 'in_progress',
      priority: 'medium',
      createdAt: '2026-08-11T14:30:00Z',
      resolvedAt: null
    },
    {
      ticketId: 3,
      productId: 3,
      categoryId: 8,
      subject: 'Solar panel output low',
      body: 'Customer says energy production dropped after installation.',
      status: 'resolved',
      priority: 'low',
      createdAt: '2026-08-05T11:00:00Z',
      resolvedAt: '2026-08-07T16:20:00Z'
    }
  ];

  getTickets(): Ticket[] {
    return this.tickets;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.productId === id);
  }
}