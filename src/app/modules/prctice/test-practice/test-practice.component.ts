import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-practice',
  templateUrl: './test-practice.component.html',
  styleUrls: ['./test-practice.component.scss']
})
export class TestPracticeComponent implements OnInit {
  orderForm: any
  constructor() {
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
