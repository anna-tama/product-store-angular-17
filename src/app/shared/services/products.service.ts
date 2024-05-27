import { Component, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  apiEndpoint = '/api/';

  apiProducts = this.apiEndpoint + 'products/';

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>(this.apiProducts)
  }

  get(id: string) {
    return this.httpClient.get<Product>(this.apiProducts + `${id}`)
  }

  post(payload: ProductPayload) {
    return this.httpClient.post(this.apiProducts, payload)
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(this.apiProducts + `${id}`, payload)
  }

  delete(id: string) {
    return this.httpClient.delete(this.apiProducts + `${id}`)
  }

}
