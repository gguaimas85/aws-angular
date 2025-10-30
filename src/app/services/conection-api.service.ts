import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConectionApiService {
  //private apiURL = 'http://127.0.0.1:3000/api';
  private apiURL = 'http://54.242.209.33:3000/api';
  private products = '/products';

  constructor(private _httpClient: HttpClient) {}

  getProductsAPI(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.apiURL + this.products);
  }
}
