import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { AuthData } from 'src/app/model/auth.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

    private baseUrl = 'https://api.test-cobiro.com/'
    private authToken: string;
    public isLoggedIn = false;

    constructor(private http: HttpClient) {}

    public logIn(loginData: { email: string; password: string }): Observable<AuthData> {
      return this.http.post<AuthData>(this.baseUrl + 'api/v1/login', loginData);
    }

    public setToken(token: string) {
      this.authToken = token;
    }

    public getToken(): string {
      return this.authToken;
    }
}

