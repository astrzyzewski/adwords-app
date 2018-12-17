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

  /**
    * Sends a GET request to the site API. The API uses the customer's auth token
    * to find their sites.
    *
    * @returns Observable holding the request status and a list of the customer's sites
    */
  public getSites() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authService.getToken()
      })
    };

    return this.http.get<{ status: string, sites: Site[]}>(this.baseUrl + 'api/v1/site', httpOptions);
  }

  /**
    * Sends a POST request to the site API to add a new site
    *
    * @param site SitePost object holding the website's name and domain
    *
    * @returns Observable
    */
  public addSite(site: SitePost) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authService.getToken()
      })
    };

    return this.http.post(this.baseUrl + 'api/v1/site', site, httpOptions);
  }

  /**
    * Sends a PATCH request to the site API to modify a site
    *
    * @param site Site object holding the website's id, name, domain and daily budget
    *
    * @returns Observable
    */
  public editSite(site: Site) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authService.getToken()
      })
    };

    return this.http.patch(this.baseUrl + 'api/v1/site/' + site.id, site, httpOptions);
  }

}

