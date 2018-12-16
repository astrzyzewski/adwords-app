import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Adwords App';
  isLoggedIn = false;
  login: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginState()
      .subscribe(state => {
          console.log(state);
          this.isLoggedIn = state.state;
          this.login = state.login;
        });
  }

}
