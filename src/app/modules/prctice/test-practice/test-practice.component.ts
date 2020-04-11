import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterState, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-practice',
  templateUrl: './test-practice.component.html',
  styleUrls: ['./test-practice.component.scss']
})
export class TestPracticeComponent implements OnInit {
  orderForm: any
  // htmlSnippet: string = 'hello <b> inner HTML </b>'
  htmlSnippet = 'Template <script>alert("XSS Attack")</script> <b>Code attached</b>';
  constructor(router: Router) {
    const state: RouterState = router.routerState;
    console.log("state ", state);
    const root: ActivatedRoute = state.root;
    console.log("root ", root);
    // const child = root.firstChild;
    // console.log("child ", child);
    // const id: Observable<string> = child.params.map(p => p.id);
    // console.log("id ", id);
    this.orderForm = new FormGroup({
      firstName: new FormControl('John', Validators.minLength(3)),
      lastName: new FormControl('Rodson'),
      items: new FormArray([
        new FormControl(null)
      ])
    });
  }

  ngOnInit() {
  }
  onSubmit() {

  }
  onSubmitForm() {
    // Save the items this.orderForm.value in DB
  }

  onAddItem() {
    this.orderForm.controls.items.push(new FormControl(null));
  }

  onRemoveItem(index) {
    this.orderForm.controls['items'].removeAt(index);
  }
}
