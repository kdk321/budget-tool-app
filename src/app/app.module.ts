import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetItemComponent } from './budget-item/budget-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetItemListComponent,
    BudgetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
