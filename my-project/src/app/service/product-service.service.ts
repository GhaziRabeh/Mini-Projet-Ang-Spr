import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config/URL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrlProd = `${APP_CONFIG.root_api_uri_product}`;

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProd}/all`);
  }

  insertProduct(dataProd: FormData): Observable<any> { 
    return this.http.post<any>(`${this.apiUrlProd}/add`, dataProd);
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProd}/${id}`);
  }

  getProductByCategory(categoryId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProd}/category/${categoryId}`);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlProd}/delete/${id}`);
  }

  updateProduct(id: any, dataProduct: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrlProd}/update/${id}`, dataProduct);
  }
}
