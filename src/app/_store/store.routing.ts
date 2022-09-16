import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreLandingComponent } from './store-landing/store-landing.component';
import { StoreComponent } from './store/store.component';
const ROUTES: Routes = [
  {
    path: '',
    component: StoreLandingComponent,
    children: [
      { path: '', component: StoreComponent },
    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class StoreRoutingModule { }
