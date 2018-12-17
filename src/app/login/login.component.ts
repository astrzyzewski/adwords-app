import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

/**
* Component responsible for handling user authentication
*
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isLoggedIn = false;

  errorMessages: string[] = [];

  constructor(private authService: AuthService) { }

  /**
  * Subscribes to updates on the authentication state to hide/show
  * links to the login and register pages or the email of the current user
  */
  ngOnInit() {
    this.authService.getLoginState()
      .subscribe(state => {
        this.isLoggedIn = state.state;
        this.email = state.login;
      });
  }

  /**
   * Calls and subscribes to the results of the login API
   * On success, will set the login value in AuthService to 'true' and
   * displays a success message.
   * On failure, will display error messages
   */
  onSubmit() {
    this.authService.logIn({email: this.email, password: this.password})
      .subscribe(response => {
        this.authService.setToken(response.access_token);
        this.authService.setLoggedIn(this.email);
        this.errorMessages = [];

        interval(response.expires_in)
          .pipe(take(1))
          .subscribe(value => this.authService.setLoggedOut());
      }, error => {
        if(error.status === 422) {
          if (error.error.data.email) this.errorMessages.push(error.error.data.email[0]);
          if (error.error.data.password) this.errorMessages.push(error.error.data.password[0]);
        } else {
          this.errorMessages.push(error.error.message);
        }
       })
  }

}
