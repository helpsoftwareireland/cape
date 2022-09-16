import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewsLandingComponent } from './news-landing/news-landing.component';
import { NewsComponent } from './news/news.component';
const ROUTES: Routes = [
  {
    path: '',
    component: NewsLandingComponent,
    children: [
      { path: '', component: NewsComponent },
    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class NewsRoutingModule { }
