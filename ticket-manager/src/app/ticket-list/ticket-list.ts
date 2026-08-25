import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TicketDataService, Product, Category } from '../ticket-data';
import { Ticket } from '../ticket';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink, DatePipe],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})

export class TicketList {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['product', 'category', 'subject', 'status', 'priority', 'createdAt', 'actions'];

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

  onDelete(ticketId: number): void {
    this.ticketData.deleteTicket(ticketId);
    this.tickets = this.ticketData.getTickets();
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'low':    return '#bbefba';  
      case 'medium': return '#e9f4b6';  
      case 'high':   return '#fbfbb9';  
      case 'urgent': return '#ffdfb1';  
      default:       return '#fabead';  
    }
  }

}