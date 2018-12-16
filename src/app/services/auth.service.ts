import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { AuthData } from 'src/app/model/auth.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

    private baseUrl = 'https://api.test-cobiro.com/'
    private authToken: string;
    private loggedInSubject: BehaviorSubject<{ login: string, state: boolean }> =
      new BehaviorSubject({ login: null, state: false });
    private login;

    constructor(private http: HttpClient) {}

    public logIn(loginData: { email: string; password: string }): Observable<AuthData> {
      return this.http.post<AuthData>(this.baseUrl + 'api/v1/login', loginData);
    }

    public setLoggedIn(login: string) {
      this.loggedInSubject.next({ login: login, state: true });
    }

    public setLoggedOut() {
      this.loggedInSubject.next({ login: null, state: false });
    }

    public getLoginState(): Observable<{ login: string, state: boolean }> {
      return this.loggedInSubject.asObservable();
    }

    public setToken(token: string) {
      this.authToken = token;
    }

    public getToken(): string {
      return this.authToken;
    }
}

