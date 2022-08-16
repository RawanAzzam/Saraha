import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsiderbarComponent } from './asiderbar/asiderbar.component';
import { ManageReportComponent } from './manage-report/manage-report.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
 
  },
  {
    path:'',
    component:AsiderbarComponent
 
  },
  {
    path:'HomePage',
    component:HomeComponent
 
  },
  {
    path:'Report',
    component:ManageReportComponent
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class AdminRoutingModule { }
