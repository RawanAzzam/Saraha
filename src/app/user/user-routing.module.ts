import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeTestimonyComponent } from './make-testimony/make-testimony.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificatonsComponent } from './notificatons/notificatons.component';
import { ServiceComponent } from './service/service.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    component:UserProfileComponent
  },
  {
    path:'messages',
    component:MessagesComponent
  },
  {
    path:'notifications',
    component:NotificatonsComponent
  },
  {
    path:'about',
    component:UserAboutComponent
  },
  {
    path:'create-testimony',
    component:MakeTestimonyComponent
  },
  {
    path:'my-badges',
    component:ServiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
