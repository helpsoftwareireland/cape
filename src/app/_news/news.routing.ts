import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewsLandingComponent } from './news-landing/news-landing.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import { HttpRequestInterceptor } from '@app/@core/http-request-interceptor';
const ROUTES: Routes = [
  {
    path: '',
    component: NewsLandingComponent,
    children: [
      { path: '', component: NewsComponent },
      { path: 'post/:postid', component: PostComponent },

    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
    }],
})
export class NewsRoutingModule { }
