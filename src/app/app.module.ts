import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginComponent } from './login/login.component';

import { SiteService } from './services/site.service';
import { AuthService } from './services/auth.service';
import { NetworkService } from './services/network.service';
import { AddSiteComponent } from './sites/add-site/add-site.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';
import { ManageSiteComponent } from './sites/manage-site/manage-site.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    LoginComponent,
    AddSiteComponent,
    EditSiteComponent,
    ManageSiteComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NetworkService, AuthService, SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
