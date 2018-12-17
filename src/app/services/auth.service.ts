import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { AuthData } from 'src/app/model/auth.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
* Service responsible for handling authorization
*
*/
@Injectable()
export class AuthService {

    private baseUrl = 'https://api.test-cobiro.com/'
    private authToken: string;
    private loggedInSubject: BehaviorSubject<{ login: string, state: boolean }> =
      new BehaviorSubject({ login: null, state: false });
    private login;

    constructor(private http: HttpClient) {}

    /**
    * Sends a POST login request to the API
    * @param loginData object holding the body params of the request, email: string and password: string
    *
    * @returns Observable holding access token and expiration time
    */
    public logIn(loginData: { email: string; password: string }): Observable<AuthData> {
      return this.http.post<AuthData>(this.baseUrl + 'api/v1/login', loginData);
    }

    /**
    * Sets login status to true. Triggers the Observable returned by
    * getLoginState() to send a new value.
    *
    * @param login email of the logged-in user
    *
    */
    public setLoggedIn(login: string) {
      this.loggedInSubject.next({ login: login, state: true });
    }

    /**
    * Sets login status to false. Triggers the Observable returned by
    * getLoginState() to send a new value.
    *
    */
    public setLoggedOut() {
      this.loggedInSubject.next({ login: null, state: false });
    }

    /**
    * Returns an Observable which will return login and state when setLoggedIn and
    * setLoggedOut are called
    *
    * @return Observable containing the object { login: string, state: boolean }
    */
    public getLoginState(): Observable<{ login: string, state: boolean }> {
      return this.loggedInSubject.asObservable();
    }

    /**
    * Sets the value of the authentication token
    */
    public setToken(token: string) {
      this.authToken = 'Bearer ' + token;
    }

    /**
    * Returns the value of the authentication token
    */
    public getToken(): string {
      return this.authToken;
    }
}

