import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDragonComponent } from './components/create-dragon/create-dragon.component';
import { DragonDetailsComponent } from './components/dragon-details/dragon-details.component';


const routes: Routes = [
  { path: 'create', component: CreateDragonComponent },
  { path: ':id', component: DragonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }
