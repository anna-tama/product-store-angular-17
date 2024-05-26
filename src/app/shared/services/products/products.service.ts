import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';
import { ProductPayload } from '../../interfaces/payload-product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.service.html',
  styleUrl: './products.service.scss'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products')
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload)
  }

}
