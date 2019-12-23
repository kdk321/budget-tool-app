import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { BudgetItemService } from '../services/budget-item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {

  budgetItem: Item;
  id: number;

  constructor(private budgetItemService: BudgetItemService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.budgetItem = new Item();
    this.id = this.route.snapshot.params.id;

    if (this.id != -1){
      this.getBudgetItem();
    }
  }

  saveBudgetItem()
  {
    this.budgetItemService.save(this.budgetItem).subscribe(data =>
      this.router.navigateByUrl("budget-item-list")
    );
  }

  getBudgetItem(){
     this.budgetItemService.findById(this.id).subscribe(data => this.budgetItem = data);
  }
}
