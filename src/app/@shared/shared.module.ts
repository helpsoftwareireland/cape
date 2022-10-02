import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons.module';
import { SafePipe } from '@app/@core/safe.pipe';



@NgModule({
  declarations: [SafePipe],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    IconsModule,
    SafePipe
  ]
})
export class SharedModule { }
