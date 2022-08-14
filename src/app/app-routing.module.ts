import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'contact',
    component:ContactComponent
    },
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'Home',
      component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
  },{
    path:'authentication',
    loadChildren: () => AuthenticationModule
},
{
  path:'admin',
  loadChildren: () => AdminModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
