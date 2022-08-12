import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
