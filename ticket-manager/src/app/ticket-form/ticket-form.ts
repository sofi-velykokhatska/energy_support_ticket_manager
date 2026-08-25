import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TicketDataService, Product, Category } from '../ticket-data';

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

  constructor(
    private fb: FormBuilder,
    private ticketData: TicketDataService
  ) {
    this.products = this.ticketData.getProducts();

    this.ticketForm = this.fb.group({
      productId: [null, Validators.required],
      categoryId: [null, Validators.required],
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
      this.ticketForm.get('categoryId')!.setValue(null);
    });

  }

  onSubmit() {
    if (this.ticketForm.valid) {
      console.log('Form values:', this.ticketForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}