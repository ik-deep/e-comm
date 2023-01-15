import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: product) {
    return this.http.post("http://localhost:3000/product", data)
  }

  productList() {
    return this.http.get<product[]>("http://localhost:3000/product");
  }

  deletProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getProduct(data: string) {
    return this.http.get<product>(`http://localhost:3000/product/${data}`);
  }

  updateProduct(data: product) {
    return this.http.put(`http://localhost:3000/product/${data.id}`, data)
  }
  popularProduct() {
    return this.http.get<product[]>("http://localhost:3000/product?_limit=4");
  }
  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8');
  }
 
  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }
}
