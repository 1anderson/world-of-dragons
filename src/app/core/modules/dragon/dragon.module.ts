import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonRoutingModule } from './dragon-routing.module';
import { DragonDetailsComponent } from './components/dragon-details/dragon-details.component';
import { CreateDragonComponent } from './components/create-dragon/create-dragon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DragonDetailsComponent, CreateDragonComponent],
  imports: [
    CommonModule,
    DragonRoutingModule,
    SharedModule
  ]
})
export class DragonModule { }
