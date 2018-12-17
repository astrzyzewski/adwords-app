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

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSites().subscribe(result => {
      this.sites = result.sites;
      this.site = this.sites[0];
    });
  }

  public onChange(deviceValue) {
    console.log(deviceValue);
  }

  onSubmit() {
    this.siteService.editSite(this.site).subscribe(result => console.log(result));
  }

}
