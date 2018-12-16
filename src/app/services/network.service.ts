import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer.model'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NetworkService {
    private baseUrl = 'https://api.test-cobiro.com/'
    private authToken: string;

    constructor(private http: HttpClient) {}

    public registerCustomer(customer: Customer): Observable<string> {
      return this.http.post<string>(this.baseUrl + 'api/v1/register', customer)
    }

}
