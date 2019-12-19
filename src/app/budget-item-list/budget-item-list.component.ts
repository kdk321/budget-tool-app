import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { BudgetItemService } from '../services/budget-item.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  items: Item[];
  
  constructor(private budgetItemService: BudgetItemService) { }

  ngOnInit() {
    this.budgetItemService.findAll().subscribe(data => {
      this.items = data;
    });
  }

  getRemainingAmount(){    
    let remainingAmount: number = 0;
    this.items.forEach(item => {
      remainingAmount = remainingAmount + item.amount;      
    });
    return remainingAmount;
  }

}
