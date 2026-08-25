import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

export interface Product {
  productId: number;
  name: string;
  color: string;
}

export interface Category {
  categoryId: number;
  productId: number;
  name: string;
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

    private categories: Category[] = [
    // B2C Electricity (product 1)
    { categoryId: 1,  productId: 1, name: 'Billing dispute' },
    { categoryId: 2,  productId: 1, name: 'Payment / direct debit issue' },
    { categoryId: 3,  productId: 1, name: 'Change monthly installment (Abschlag)' },
    { categoryId: 4,  productId: 1, name: 'Meter reading submission' },
    { categoryId: 5,  productId: 1, name: 'Meter fault / replacement' },
    { categoryId: 6,  productId: 1, name: 'Tariff change' },
    { categoryId: 7,  productId: 1, name: 'Online application failed' },
    { categoryId: 8,  productId: 1, name: 'Contract cancellation' },
    { categoryId: 9,  productId: 1, name: 'Move-in / move-out' },
    { categoryId: 10, productId: 1, name: 'Power outage' },
    { categoryId: 11, productId: 1, name: 'Price increase complaint' },
    { categoryId: 12, productId: 1, name: 'Refund / credit request' },
    { categoryId: 13, productId: 1, name: 'Other' },

    // E-Mobility (product 2)
    { categoryId: 14, productId: 2, name: 'Charging failure (public)' },
    { categoryId: 15, productId: 2, name: 'Charging card / RFID not working' },
    { categoryId: 16, productId: 2, name: 'App / login issue' },
    { categoryId: 17, productId: 2, name: 'Billing for charging sessions' },
    { categoryId: 18, productId: 2, name: 'Roaming / network access' },
    { categoryId: 19, productId: 2, name: 'Slow charging speed' },
    { categoryId: 20, productId: 2, name: 'Subscription / tariff change' },
    { categoryId: 21, productId: 2, name: 'Online application failed' },
    { categoryId: 22, productId: 2, name: 'Payment method issue' },
    { categoryId: 23, productId: 2, name: 'Station locator / availability' },
    { categoryId: 24, productId: 2, name: 'Contract cancellation' },
    { categoryId: 25, productId: 2, name: 'Other' },

    // Solar Panels (product 3)
    { categoryId: 26, productId: 3, name: 'Low energy output' },
    { categoryId: 27, productId: 3, name: 'Installation delay' },
    { categoryId: 28, productId: 3, name: 'Installation quality / defect' },
    { categoryId: 29, productId: 3, name: 'Inverter fault' },
    { categoryId: 30, productId: 3, name: 'Monitoring app issue' },
    { categoryId: 31, productId: 3, name: 'Feed-in tariff question' },
    { categoryId: 32, productId: 3, name: 'Warranty claim' },
    { categoryId: 33, productId: 3, name: 'Maintenance request' },
    { categoryId: 34, productId: 3, name: 'Grid connection / paperwork' },
    { categoryId: 35, productId: 3, name: 'Billing / payout dispute' },
    { categoryId: 36, productId: 3, name: 'Online application failed' },
    { categoryId: 37, productId: 3, name: 'Other' },

    // Smart Home / Energy Management (product 4)
    { categoryId: 38, productId: 4, name: 'Device won\'t connect' },
    { categoryId: 39, productId: 4, name: 'Device offline / dropping out' },
    { categoryId: 40, productId: 4, name: 'App bug / crash' },
    { categoryId: 41, productId: 4, name: 'Data / consumption accuracy' },
    { categoryId: 42, productId: 4, name: 'Firmware update problem' },
    { categoryId: 43, productId: 4, name: 'Integration with other devices' },
    { categoryId: 44, productId: 4, name: 'Automation / schedule not working' },
    { categoryId: 45, productId: 4, name: 'Account / login issue' },
    { categoryId: 46, productId: 4, name: 'Hardware defect' },
    { categoryId: 47, productId: 4, name: 'Setup / onboarding help' },
    { categoryId: 48, productId: 4, name: 'Online application failed' },
    { categoryId: 49, productId: 4, name: 'Other' },
  ];

  private tickets: Ticket[] = [
    {
      ticketId: 1,
      productId: 2,               // E-Mobility
      categoryId: 14,             // Charging failure (public)
      subject: 'Public charger not starting',
      body: 'Customer reports the charger fails after the latest app update.',
      status: 'open',
      priority: 'high',
      createdAt: '2026-08-10T09:15:00Z',
      resolvedAt: null
    },
    {
      ticketId: 2,
      productId: 1,               // B2C Electricity
      categoryId: 1,              // Billing dispute
      subject: 'Billing amount incorrect',
      body: 'Monthly electricity bill is higher than expected.',
      status: 'in_progress',
      priority: 'medium',
      createdAt: '2026-08-11T14:30:00Z',
      resolvedAt: null
    },
    {
      ticketId: 3,
      productId: 3,               // Solar Panels
      categoryId: 26,             // Low energy output
      subject: 'Solar panel output low',
      body: 'Customer says energy production dropped after installation.',
      status: 'resolved',
      priority: 'low',
      createdAt: '2026-08-05T11:00:00Z',
      resolvedAt: '2026-08-07T16:20:00Z'
    },
    {
      ticketId: 4,
      productId: 1,               // B2C Electricity
      categoryId: 3,              // Change monthly installment (Abschlag)
      subject: 'Wants to lower monthly Abschlag',
      body: 'Customer asks to reduce the monthly installment after moving to a smaller flat.',
      status: 'open',
      priority: 'low',
      createdAt: '2026-08-12T08:45:00Z',
      resolvedAt: null
    },
    {
      ticketId: 5,
      productId: 4,               // Smart Home / Energy Management
      categoryId: 38,             // Device won't connect
      subject: 'Smart meter device won\'t pair',
      body: 'New energy monitor will not connect to the home WiFi during setup.',
      status: 'in_progress',
      priority: 'medium',
      createdAt: '2026-08-13T16:10:00Z',
      resolvedAt: null
    },
    {
      ticketId: 6,
      productId: 2,               // E-Mobility
      categoryId: 21,             // Online application failed
      subject: 'Sign-up did not complete online',
      body: 'Customer could not finish the e-mobility subscription on the website and called to complete it.',
      status: 'open',
      priority: 'medium',
      createdAt: '2026-08-14T10:05:00Z',
      resolvedAt: null
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