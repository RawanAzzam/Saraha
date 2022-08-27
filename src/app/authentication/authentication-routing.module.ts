import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { VerfiyEmailComponent } from './verfiy-email/verfiy-email.component';

const routes: Routes = [
  {
    path:'Login',
    component:LoginComponent
  }, {
    path:'Register',
    component:RegisterComponent,
    
  },
  {
    path:"logout",
    component:LogoutComponent
  },
 {
   path:'verfiy',
   component:VerfiyEmailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
