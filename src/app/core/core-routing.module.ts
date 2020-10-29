import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent}
  // { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  // { path: 'questionary', loadChildren: () => import('./modules/questionary/questionary.module').then(m => m.QuestionaryModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
