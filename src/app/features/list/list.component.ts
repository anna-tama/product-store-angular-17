import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  providers: [ProductsService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: Product[] = [];
  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

}
