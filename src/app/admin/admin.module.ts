import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageHomePageComponent } from './manage-home-page/manage-home-page.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageReportComponent } from './manage-report/manage-report.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../admin/shared/shared.module';
import { AsiderbarComponent } from './asiderbar/asiderbar.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';


@NgModule({
  declarations: [
    ManageHomePageComponent,
    ManageUsersComponent,
    ManageServicesComponent,
    ManageReportComponent,
    HomeComponent,
    AsiderbarComponent,
    HeaderComponent,
    MessagesComponent,
    AboutUsComponent,
    TestimonialComponent,
    ManageHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
