import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TicketDataService } from '../ticket-data';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  imports: [MatTableModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})

export class TicketList {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['subject', 'status', 'priority', 'createdAt'];

  constructor(private ticketData: TicketDataService) {
    this.tickets = this.ticketData.getTickets();
  }
}
