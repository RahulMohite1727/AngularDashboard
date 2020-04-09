import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaApiComponent } from './corona-api.component';

describe('CoronaApiComponent', () => {
  let component: CoronaApiComponent;
  let fixture: ComponentFixture<CoronaApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
