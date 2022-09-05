import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './home/home.component';

import { UserModule } from './user/user.module';
import { VisaComponent } from './user/visa/visa.component';
import { WaedComponent } from './waed/waed.component';

const routes: Routes = [
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'Home',
      component:HomeComponent
      },
      {
      path:'waed',
      component:WaedComponent
      },
  {
    path:'authentication',
    loadChildren: () =>import('./authentication/authentication.module')
    .then((m)=>m.AuthenticationModule)
},
{
  path:'admin',
  loadChildren: () =>import('./admin/admin.module')
  .then((m)=>m.AdminModule)
},
{
path:'user',
loadChildren: () => UserModule
},
{
  path:'visa',
  component:VisaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
