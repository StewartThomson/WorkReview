import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {path: 'review/:id', component: ReportComponent},
  {path: '', component: AboutMeComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
