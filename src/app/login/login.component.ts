import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  errorMessages: string[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.logIn({email: this.email, password: this.password})
      .subscribe(response => {
        console.log(response);
        this.authService.setToken(response.access_token);
        this.authService.isLoggedIn = true;
        this.errorMessages = [];

        interval(response.expires_in)
          .pipe(take(1))
          .subscribe(value => this.authService.isLoggedIn = false);
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
