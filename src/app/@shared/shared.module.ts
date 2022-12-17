import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons.module';
import { SafePipe } from '@app/@core/safe.pipe';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SafePipe, CartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsModule
  ],
  exports: [
    HttpClientModule,
    IconsModule,
    SafePipe,
    CartComponent
  ]
})
export class SharedModule { }
