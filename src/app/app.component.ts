import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CO-OP Work Term Reports';
  allReports: Observable<any>;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private contentful: ContentfulService, private sidenavService: SidenavService) { }

  ngOnInit(){
    this.allReports = this.contentful.getAllEntries();
    this.sidenavService.setSidenav(this.sidenav);
  }
}
