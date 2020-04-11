import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrcticeRoutingModule } from './prctice-routing.module';
import { TestPracticeComponent } from './test-practice/test-practice.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestPracticeComponent],
  imports: [
    CommonModule,
    PrcticeRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrcticeModule { }
