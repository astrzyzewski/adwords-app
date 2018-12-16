import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AddSiteComponent } from './sites/add-site/add-site.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';
import { ManageSiteComponent } from './sites/manage-site/manage-site.component';

const routes: Routes = [
    { path: 'register', component: RegisterCustomerComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddSiteComponent },
    { path: 'edit', component: EditSiteComponent },
    { path: 'manage', component: ManageSiteComponent },
    { path: '', component: MainComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
