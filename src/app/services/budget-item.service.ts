import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemService {

  private budgetItemsUrl: string;

  constructor(private http: HttpClient) {
    this.budgetItemsUrl = "http://localhost:8080/budget-items";
   }

   public findAll(): Observable<Item[]> {
     return this.http.get<Item[]>(this.budgetItemsUrl);
   }

   public save(item: Item){
     return this.http.post<Item>(this.budgetItemsUrl, item);
   }


}
