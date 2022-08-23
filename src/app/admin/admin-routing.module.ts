import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsiderbarComponent } from './asiderbar/asiderbar.component';
import { ManageReportComponent } from './manage-report/manage-report.component';
import { MessagesComponent } from './messages/messages.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { UsersComponent } from './users/users.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
 
  },
  {
    path:'Testimonials',
    component:TestimonialsComponent
 
  },
  {
    path:'HomePage',
    component:HomeComponent
 
  },
  {
    path:'Report',
    component:ManageReportComponent
 
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
 
  }, {
    path:'Purchase',
    component:PurchaseComponent
 
  },
  {
    path:'MyProfile',
    component:AdminProfileComponent
 
  },
  {
    path:'compose',
    component:EmailComposeComponent
 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class AdminRoutingModule { }
