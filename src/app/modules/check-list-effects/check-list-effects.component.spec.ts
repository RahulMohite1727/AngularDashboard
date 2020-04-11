import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListEffectsComponent } from './check-list-effects.component';

describe('CheckListEffectsComponent', () => {
  let component: CheckListEffectsComponent;
  let fixture: ComponentFixture<CheckListEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
