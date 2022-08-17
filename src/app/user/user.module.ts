import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from './shared/shared.module';
import { MessagesComponent } from './messages/messages.component';
import { NotificatonsComponent } from './notificatons/notificatons.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    MessagesComponent,
    NotificatonsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
})
export class UserModule { }
