import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsiderbarComponent } from './asiderbar/asiderbar.component';
import { ManageReportComponent } from './manage-report/manage-report.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { UsersComponent } from './users/users.component';


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
 
  }, {
    path:'AboutUs',
    component:AboutUsComponent
 
  }, {
    path:'Testimonial',
    component:TestimonialComponent
 
  },
  {
    path:'Message',
    component:MessagesComponent
 
  }, {
    path:'Service',
    component:ManageServicesComponent
 
  }, {
    path:'ManageHome',
    component:ManageHomeComponent
 
  }, {
    path:'Users',
    component:UsersComponent
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class AdminRoutingModule { }
