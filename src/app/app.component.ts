import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CO-OP Work Term Reports';
  allReports: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit(){
    this.allReports = this.contentful.getAllEntries();
  }
}
