import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const routes: Routes = [
    { path: 'register', component: RegisterCustomerComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
