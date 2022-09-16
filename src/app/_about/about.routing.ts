import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AboutLandingComponent } from './about-landing/about-landing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const ROUTES: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: AboutLandingComponent,
    children: [
      { path: '', component: AboutusComponent },
    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class AboutRoutingModule { }
