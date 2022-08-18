import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageReportComponent } from './manage-report/manage-report.component';
import { HomeComponent } from './home/home.component';
import { AsiderbarComponent } from './asiderbar/asiderbar.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { UsersComponent } from './users/users.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    ManageUsersComponent,
    ManageServicesComponent,
    ManageReportComponent,
    HomeComponent,
    AsiderbarComponent,
    HeaderComponent,
    MessagesComponent,
    ManageHomeComponent,
    UsersComponent,
    PurchaseComponent,
    TestimonialsComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
    ]
})
export class AdminModule { }
