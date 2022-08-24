import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActiveBarComponent } from './active-bar/active-bar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ActiveBarComponent,
    ProfileBarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    NavBarComponent,
    ActiveBarComponent,
    ProfileBarComponent,

  ]
})
export class SharedModule { }
