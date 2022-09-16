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
    path: 'AboutUs',
    component: MainbaseComponent,
    loadChildren: () => import('./_about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'News',
    component: MainbaseComponent,
    loadChildren: () => import('./_news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'Store',
    component: MainbaseComponent,
    loadChildren: () => import('./_store/store.module').then(m => m.StoreModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
