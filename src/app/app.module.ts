import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginServices } from './login.service'
import { RouterModule,Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { profileServices } from './profile.service'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = ([
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
 
])


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [loginServices,profileServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
