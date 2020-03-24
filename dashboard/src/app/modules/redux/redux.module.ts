import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { ReduxComponent } from './redux.component';

import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [ReduxComponent],
  imports: [
    CommonModule,
    ReduxRoutingModule,
    NgReduxModule
  ]
})
export class ReduxModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
