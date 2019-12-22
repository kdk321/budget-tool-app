import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { BudgetItemService } from '../services/budget-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  items: Item[];
  remainingAmount: number;
  
  constructor(private budgetItemService: BudgetItemService, private router: Router) { }

  ngOnInit() {
    this.budgetItemService.findAll().subscribe(data => {
      this.items = data;
      this.remainingAmount = this.getRemainingAmount();
    });
  }

  getRemainingAmount(){    
    let remainingAmount: number = 0;
    this.items.forEach(item => {

      remainingAmount = remainingAmount + item.amount; 
    });    
    return remainingAmount;
  }

  addItem(){
    this.router.navigate(['budget-item', -1])
  }

}
