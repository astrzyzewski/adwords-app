import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteComponent } from './edit-site.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';
import { SiteService } from 'src/app/services/site.service';

describe('EditSiteComponent', () => {
  let component: EditSiteComponent;
  let fixture: ComponentFixture<EditSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiteComponent ],
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
    fixture = TestBed.createComponent(EditSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
