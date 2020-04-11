import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPracticeComponent } from './test-practice/test-practice.component';


const routes: Routes = [
  {
    path: '',
    component: TestPracticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrcticeRoutingModule { }
