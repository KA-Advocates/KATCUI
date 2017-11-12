import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LintResultsComponent } from './lint-results.component';

describe('LintResultsComponent', () => {
  let component: LintResultsComponent;
  let fixture: ComponentFixture<LintResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LintResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LintResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
