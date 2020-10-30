import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './components/toast/toast.component';
import { InterceptorModule } from './components/interceptor/interceptor.module';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    InterceptorModule
  ],
  exports: [ FormsModule, ToastComponent, ReactiveFormsModule ]
})
export class SharedModule { }
