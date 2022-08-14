import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageHomePageComponent } from './manage-home-page/manage-home-page.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { ManageReportComponent } from './manage-report/manage-report.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../admin/shared/shared.module';


@NgModule({
  declarations: [
    ManageHomePageComponent,
    ManageUsersComponent,
    ManageServicesComponent,
    ManageReportComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
