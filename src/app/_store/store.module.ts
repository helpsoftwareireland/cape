import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreLandingComponent } from './store-landing/store-landing.component';
import { StoreComponent } from './store/store.component';
import { SharedModule } from '../@shared/shared.module';
import { StoreRoutingModule } from './store.routing';



@NgModule({
  declarations: [
    StoreLandingComponent,
    StoreComponent
  ],
  imports: [
    CommonModule, SharedModule, StoreRoutingModule
  ]
})
export class StoreModule { }
