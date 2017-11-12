import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleOverviewComponent } from './rule-overview.component';

describe('RuleOverviewComponent', () => {
  let component: RuleOverviewComponent;
  let fixture: ComponentFixture<RuleOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
