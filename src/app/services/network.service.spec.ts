import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer.model';
import { NetworkService } from './network.service';

describe('NetworkService', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          NetworkService
        ],
      })
      .compileComponents();
    }));

  it('#registerCustomer should return values', (done: DoneFn) => {
      let service = TestBed.get(NetworkService);
      let customer = new Customer();

      let id = Math.floor(Math.random() * 50000) + 1;

      customer.email = 'co-app-test-' + id + '@maildrop.cc';
      customer.password = 'zaq123';
      customer.first_name = 'App';
      customer.last_name = 'Test';
      customer.country_code = 'GB';
      console.log(customer.email);

      service.registerCustomer(customer)
        .subscribe(value => {
          expect(value).toBe('We have sent an email with an activation link');
          done();
        })

    }, 30000);
})
