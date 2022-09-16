import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeRoutingModule } from './home.routing';
import { MainStoryComponent } from './main-story/main-story.component';
import { CarouselComponent } from './hero/carousel/carousel.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, HomeLandingComponent, MainStoryComponent, CarouselComponent],
  imports: [
    CommonModule,HomeRoutingModule, SharedModule
  ]
})
export class HomeModule { }
