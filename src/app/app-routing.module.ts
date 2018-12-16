import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const routes: Routes = [
    { path: '', component: RegisterCustomerComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
