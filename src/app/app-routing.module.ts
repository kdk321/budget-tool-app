import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';


const routes: Routes = [
  { path: 'budget-item-list', component: BudgetItemListComponent },
  { path: '**', component: BudgetItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
