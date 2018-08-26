import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private sidenav: SidenavService) { }

  ngOnInit() {
  }

  openNav(){
    this.sidenav.open();
  }
}
