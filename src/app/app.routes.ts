import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { HomeAdminComponent } from './home/home-admin/home-admin/home-admin.component';
import { UserStoreComponent } from './home/home-store/user-store/user-store.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newPasswordRequire', component: NewPasswordComponent },
  { path: 'home/admin', component: HomeAdminComponent },
  { path: 'home/userStore', component: UserStoreComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
