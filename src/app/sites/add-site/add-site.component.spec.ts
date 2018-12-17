import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteComponent } from './add-site.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';
import { SiteService } from 'src/app/services/site.service';

describe('AddSiteComponent', () => {
  let component: AddSiteComponent;
  let fixture: ComponentFixture<AddSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        AuthService,
        NetworkService,
        SiteService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
