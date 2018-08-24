import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  id: string;
  private sub: any;
  report$: Observable<any>;

  constructor(private contentful: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.report$ = this.contentful.getContent(this.id);
    this.contentful.logContent(this.id);
    console.log(this.report$);
  }

}
