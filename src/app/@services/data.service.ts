import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, switchMap } from 'rxjs';
import * as Catalog$ from '@assets/catalog/cat.json';

@Injectable({
  providedIn: 'any'
})
export class DataService{

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return of(Catalog$).pipe();
  }
  getProduct(sku: string): Observable<any> {
    return of(Catalog$).pipe(
      )
  }
}
