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
    this.getBudgetItems();
  }

  getRemainingAmount() {
    let remainingAmount = 0;
    this.items.forEach(item => {

      remainingAmount = remainingAmount + item.amount;
    });
    return remainingAmount;
  }

  getBudgetItems() {
    this.budgetItemService.findAll().subscribe(data => {
      this.items = data;
      this.remainingAmount = this.getRemainingAmount();
    });
  }

  addBudgetItem() {
    this.router.navigate(['budget-item', -1]);
  }

  editBudgetItem(id) {
    this.router.navigate(['budget-item', id]);
  }

  deleteBudgetItem(id) {
    console.log(id);
    this.budgetItemService.delete(id).subscribe(() => {
      this.getBudgetItems();
    });
  }

}
