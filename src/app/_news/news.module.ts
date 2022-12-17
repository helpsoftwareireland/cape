import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsLandingComponent } from './news-landing/news-landing.component';
import { SharedModule } from '../@shared/shared.module';
import { NewsRoutingModule } from './news.routing';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsLandingComponent,
    PostComponent
  ],
  imports: [
    CommonModule,NewsRoutingModule, SharedModule
  ]
})
export class NewsModule { }
