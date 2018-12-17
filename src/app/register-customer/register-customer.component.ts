import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Customer } from 'src/app/model/customer.model';

/**
* Component responsible for handling registration of new users
*
*/
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  public successMessage: string;
  public errorMessages: string[] = [];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }

   /**
   * Calls and subscribes to the results of the register API call
   * On success, displays a success message.
   * On failure, will display error messages
   */
  public onSubmit() {
    this.networkService.registerCustomer(this.customer)
      .subscribe(response => {
        this.successMessage = 'We have sent an email with an activation link';
      }, error => {
        if (error.error.data.email) this.errorMessages.push(error.error.data.email[0]);
        if (error.error.data.password) this.errorMessages.push(error.error.data.password[0]);
        if (error.error.data.first_name) this.errorMessages.push(error.error.data.first_name[0]);
        if (error.error.data.last_name) this.errorMessages.push(error.error.data.last_name[0]);
        if (error.error.data.country_code) this.errorMessages.push(error.error.data.country_code[0]);
      });
  }

}
