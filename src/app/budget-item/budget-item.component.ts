import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { BudgetItemService } from '../services/budget-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {

  budgetItem: Item;

  constructor(private budgetItemService: BudgetItemService, private router: Router ) { }

  ngOnInit() {
    this.budgetItem = new Item();
  }

  saveBudgetItem()
  {
    this.budgetItemService.save(this.budgetItem).subscribe(data =>
      this.router.navigateByUrl("budget-item-list")
    );
  }

}
