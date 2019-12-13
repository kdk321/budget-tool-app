import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  items: Item[] = [
    {id: 1, paid: true, dateDue: new Date(), item: "Paycheck", amount: 500.00, reviewed: true},
    {id: 2, paid: false, dateDue: new Date(), item: "Gas", amount: -28.00, reviewed: true}
  ]

  constructor() { }

  ngOnInit() {}

}
