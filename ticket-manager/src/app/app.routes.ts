import { Routes } from '@angular/router';
import { TicketList } from './ticket-list/ticket-list';
import { TicketForm } from './ticket-form/ticket-form'; 

export const routes: Routes = [
  { path: 'tickets', component: TicketList },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' }
];