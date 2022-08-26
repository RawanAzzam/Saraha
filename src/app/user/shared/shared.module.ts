import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActiveBarComponent } from './active-bar/active-bar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { UserprofileBarComponent } from './userprofile-bar/userprofile-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    ActiveBarComponent,
    ProfileBarComponent,
    UserprofileBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    NavBarComponent,
    ActiveBarComponent,
    ProfileBarComponent,
    UserprofileBarComponent,

  ]
})
export class SharedModule { }
