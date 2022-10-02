import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreLandingComponent } from './store-landing/store-landing.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
const ROUTES: Routes = [
  {
    path: '',
    component: StoreLandingComponent,
    children: [
      { path: '', component: StoreComponent },
      { path: 'product/:sku', component: ProductComponent },
    ]

  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class StoreRoutingModule { }
