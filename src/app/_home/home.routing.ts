import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeComponent } from './home.component';
const ROUTES: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  // },
  {
    path: '',
    component: HomeLandingComponent,
    children: [
      { path: '', component: HomeComponent },
    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class HomeRoutingModule { }
