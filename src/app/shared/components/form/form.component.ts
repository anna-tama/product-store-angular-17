import { Component, Output, inject, input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  product = input<Product | null>(null);
  form!: FormGroup;

  @Output() done = new EventEmitter<Product>();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required
      }),
    });
  }

  onSubmit() {
    const product = this.form.value as Product;
    this.done.emit(product);
  }




}

