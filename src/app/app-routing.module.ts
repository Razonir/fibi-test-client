import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/dashboard/user/user.component';
import { AdminComponent } from './pages/dashboard/admin/admin.component';
import { AcsessComponent } from './pages/acsess/acsess.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent } ,
  { path: 'acsess', component: AcsessComponent } ,
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
