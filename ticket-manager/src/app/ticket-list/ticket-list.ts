import { Component } from '@angular/core';
import { TicketDataService } from '../ticket-data';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList {
  tickets: Ticket[] = [];

  constructor(private ticketData: TicketDataService) {
    this.tickets = this.ticketData.getTickets();
  }
}