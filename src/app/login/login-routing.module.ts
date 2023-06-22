import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPage} from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

/*
const routes: Routes = [
  { 
  path: '', 
  redirectTo: 'login', 
  pathMatch: 'full' 
  },
  { 
  path: 'login', 
  component: LoginPage
  },
  // Add other routes as needed
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
