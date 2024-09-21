import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route when no path is provided, path (/) will load the LoginComponent.
  { path: 'login', component: LoginComponent }, // Route for '/login'
  { path: 'main', component: MainComponentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
