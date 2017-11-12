import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleErrorsComponent } from './rule-errors.component';

describe('RuleErrorsComponent', () => {
  let component: RuleErrorsComponent;
  let fixture: ComponentFixture<RuleErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
