import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'posts',
      component: PostsComponent
    }]
  },
  {
    path: 'redux',
    loadChildren: () => import('./modules/redux/redux.module').then(m => m.ReduxModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./modules/prctice/prctice.module').then(m => m.PrcticeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
