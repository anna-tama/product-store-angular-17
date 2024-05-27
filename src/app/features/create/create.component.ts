import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  providers: [ProductsService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
  });

  onSubmit(product: any) {   
    this.productsService.post(product).subscribe(() => {
      this.matSnackBar.open('Producto creado', 'Ok')
      this.router.navigateByUrl('/')
    })
  }
}
