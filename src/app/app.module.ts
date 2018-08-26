import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToHtmlPipe } from './md-to-html.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AgmCoreModule} from '@agm/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    MdToHtmlPipe,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkIXGguCDPkXkiGAkDQa8v_wds7swChmc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
