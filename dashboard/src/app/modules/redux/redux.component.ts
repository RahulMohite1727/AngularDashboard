import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})
export class ReduxComponent implements OnInit {

  @select('counter') count;
  // counter = 0;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    // let subscription = ngRedux.subscribe(() => {
    //   let store = ngRedux.getState();
    //   this.counter = store.counter //no need of these code because we use select to async call and also no need to subscribe
    // })
  }

  ngOnInit() {
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}
