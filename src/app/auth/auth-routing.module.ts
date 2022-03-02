import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes general
import { AuthComponent } from './auth.component';
// componentes de autenticacion
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'recover',
        component: RecoverComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
