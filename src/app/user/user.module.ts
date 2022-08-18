import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from './shared/shared.module';
import { MessagesComponent } from './messages/messages.component';
import { NotificatonsComponent } from './notificatons/notificatons.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { MakeTestimonyComponent } from './make-testimony/make-testimony.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    MessagesComponent,
    NotificatonsComponent,
    UserAboutComponent,
    MakeTestimonyComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
})
export class UserModule { }
