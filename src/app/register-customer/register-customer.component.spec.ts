import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerComponent } from './register-customer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';

describe('RegisterCustomerComponent', () => {
  let component: RegisterCustomerComponent;
  let fixture: ComponentFixture<RegisterCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCustomerComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        AuthService,
        NetworkService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
