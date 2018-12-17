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

  constructor(private siteService: SiteService) { }

  ngOnInit() { }

  onSubmit() {
    this.siteService.addSite(this.site).subscribe(result => console.log(result));
  }

}
