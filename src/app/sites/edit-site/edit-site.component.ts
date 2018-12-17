import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service'
import { Site } from 'src/app/model/site.model';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss']
})
export class EditSiteComponent implements OnInit {

  public sites = [];
  public site: Site = new Site();

  public successMessage: string;
  public errorMessages: string[] = [];

  constructor(private siteService: SiteService) { }

  /**
   * Calls and subscribes to the results of the site API
   * On success, displays the resulting list of the customer's sites
   * in the select dropdown.
   * On failure, will display error messages
   */
  ngOnInit() {
    this.siteService.getSites().subscribe(result => {
      this.sites = result.sites;
      this.site = this.sites[0];
    }, error => {
      this.successMessage = null;

      if(error.status === 401) {
        this.errorMessages.push(error.error.message);
      }
    });
  }

  public onChange(index) {
    this.site = this.sites[index];
  }

  /**
   * Calls and subscribes to the results of the patch site API
   * On success, displays a success message.
   * On failure, will display error messages
   */
  onSubmit() {
    this.siteService.editSite(this.site)
      .subscribe(response => {
        this.errorMessages = [];
        this.successMessage = 'Site updated';
      }, error => {
        this.successMessage = null;

        if(error.status === 401) {
          this.errorMessages.push(error.error.message);
        } else if(error.status === 412) {
          this.errorMessages.push(error.message);
        } else if(error.status === 422) {
          if (error.error.data.name) this.errorMessages.push(error.error.data.name[0]);
          if (error.error.data.website) this.errorMessages.push(error.error.data.website[0]);
          if (error.error.data.daily_budget) this.errorMessages.push(error.error.data.daily_budget[0]);
       }
      });
  }

}
