import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path:'transaction-details',component:TransactionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
