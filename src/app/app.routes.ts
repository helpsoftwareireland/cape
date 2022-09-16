import { Routes } from '@angular/router';
import { MainbaseComponent } from './@layout/mainbase/mainbase.component';
import { HomeComponent } from './_home/home.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: MainbaseComponent,
    loadChildren: () => import('./_home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'Home',
    component: MainbaseComponent,
    loadChildren: () => import('./_home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
