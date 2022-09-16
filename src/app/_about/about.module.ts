import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SharedModule } from '../@shared/shared.module';
import { AboutRoutingModule } from './about.routing';
import { AboutLandingComponent } from './about-landing/about-landing.component';



@NgModule({
  declarations: [
    AboutusComponent, AboutLandingComponent
  ],
  imports: [
    CommonModule, SharedModule, AboutRoutingModule
  ]
})
export class AboutModule { }
