import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';
import { SitePost } from 'src/app/model/site-post.model';
import { Site } from 'src/app/model/site.model';

@Injectable()
export class SiteService {

  private baseUrl = 'https://api.test-cobiro.com/'

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getSites() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.http.get<{ status: string, sites: Site[]}>(this.baseUrl + 'api/v1/site', httpOptions);
  }

  public addSite(site: SitePost) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.http.post(this.baseUrl + 'api/v1/site', site, httpOptions);
  }

  public editSite(site: Site) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.http.patch(this.baseUrl + 'api/v1/site/' + site.id, site, httpOptions);
  }

}

