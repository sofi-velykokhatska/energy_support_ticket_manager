import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TicketDataService, Product, Category } from '../ticket-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})

export class TicketForm {
  products: Product[] = [];
  filteredCategories: Category[] = [];
  ticketForm;
  editingId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketData: TicketDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.products = this.ticketData.getProducts();

    this.ticketForm = this.fb.group({
      productId: [null as number | null, Validators.required],
      categoryId: [null as number | null, Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required],
      priority: ['medium', Validators.required],
      status: ['open', Validators.required]
    });

    this.ticketForm.get('productId')!.valueChanges.subscribe(productId => {
      if (productId) {
        this.filteredCategories = this.ticketData.getCategoriesByProduct(productId);
      } else {
        this.filteredCategories = [];
      }
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editingId = Number(idParam);
      const ticket = this.ticketData.getTicketById(this.editingId);
      if (ticket) {
        this.filteredCategories = this.ticketData.getCategoriesByProduct(ticket.productId);
        this.ticketForm.patchValue({
          productId: ticket.productId,
          categoryId: ticket.categoryId,
          subject: ticket.subject,
          body: ticket.body,
          priority: ticket.priority,
          status: ticket.status
        });
      }
    }
  }


  onSubmit() {
    if (this.ticketForm.valid) {
      const v = this.ticketForm.value;
      if (this.editingId !== null) {
        this.ticketData.updateTicket({
          ticketId: this.editingId,
          productId: v.productId!,
          categoryId: v.categoryId!,
          subject: v.subject!,
          body: v.body!,
          priority: v.priority! as 'low' | 'medium' | 'high' | 'urgent',
          status: v.status! as 'open' | 'in_progress' | 'resolved',
          createdAt: this.ticketData.getTicketById(this.editingId)!.createdAt,
          resolvedAt: this.ticketData.getTicketById(this.editingId)!.resolvedAt
        });
      } else {
        this.ticketData.addTicket({
          productId: v.productId!,
          categoryId: v.categoryId!,
          subject: v.subject!,
          body: v.body!,
          priority: v.priority! as 'low' | 'medium' | 'high' | 'urgent',
          status: v.status! as 'open' | 'in_progress' | 'resolved'
        });
      }
      this.router.navigate(['/tickets']);
    } else {
      this.ticketForm.markAllAsTouched();
    }
  }
}