import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemService {

  private readonly budgetItemsUrl: string;

  constructor(private http: HttpClient) {
    this.budgetItemsUrl = environment.budgetItemsUrl;
   }

   public findAll(): Observable<Item[]> {
     return this.http.get<Item[]>(this.budgetItemsUrl);
   }

   public findById(id): Observable<Item> {
     return this.http.get<Item>(this.budgetItemsUrl + '/' + id);
   }

   public save(item: Item) {
     return this.http.post<Item>(this.budgetItemsUrl, item);
   }

   public delete(id) {
     return this.http.delete<Item>(this.budgetItemsUrl + '/' + id);
   }


}
