import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPracticeComponent } from './test-practice.component';

describe('TestPracticeComponent', () => {
  let component: TestPracticeComponent;
  let fixture: ComponentFixture<TestPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
