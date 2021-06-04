import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyConnexionComponent } from './my-connexion/my-connexion.component';
import { MyRegisterComponent } from './my-register/my-register.component';

const routes: Routes = [
  {path: 'connexion', component: MyConnexionComponent},
  {path: 'tasks', component: MyTasksComponent},
  {path: 'register', component: MyRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
