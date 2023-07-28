import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url ='http://localhost:3000/products'
 
  constructor(private http: HttpClient) { }

getProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.Url);
}

}
