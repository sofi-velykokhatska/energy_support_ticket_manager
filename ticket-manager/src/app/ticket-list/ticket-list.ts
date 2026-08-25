import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TicketDataService, Product, Category } from '../ticket-data';
import { Ticket } from '../ticket';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ticket-list',
   imports: [MatTableModule, RouterLink, MatButtonModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})

export class TicketList {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['product', 'category', 'subject', 'status', 'priority', 'createdAt'];

  constructor(private ticketData: TicketDataService) {
    this.tickets = this.ticketData.getTickets();
  }

  getProduct(productId: number): Product | undefined {
    return this.ticketData.getProductById(productId);
  }

  getCategoryName(categoryId: number): string {
    const category = this.ticketData.getCategories().find((c: Category) => c.categoryId === categoryId);
    return category ? category.name : '—';
  }

}