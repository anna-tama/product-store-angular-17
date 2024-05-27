import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  providers: [ProductsService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: any) {
    this.productsService.put(
      this.product.id, product).subscribe(() => {
        this.matSnackBar.open('Producto editado', 'Ok')
        this.router.navigateByUrl('/');
      })
  }
}