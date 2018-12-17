import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service'
import { SitePost } from 'src/app/model/site-post.model';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  public site: SitePost = new SitePost();
  public successMessage: string;
  public errorMessages: string[] = [];

  constructor(private siteService: SiteService) { }

  ngOnInit() { }

  onSubmit() {
    this.siteService.addSite(this.site)
      .subscribe(response => {
        this.errorMessages = [];
        this.successMessage = 'Site added';
      }, error => {
        this.successMessage = null;
        console.log(error);
        if(error.status === 401) {
          this.errorMessages.push(error.error.message);
        } else if(error.status === 412) {
          this.errorMessages.push(error.message);
        } else if(error.status === 422) {
          if (error.error.data.name) this.errorMessages.push(error.error.data.name[0]);
          if (error.error.data.website) this.errorMessages.push(error.error.data.website[0]);
        }
      });
  }

}
