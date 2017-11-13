import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRedirectComponent } from './start-redirect.component';

describe('StartRedirectComponent', () => {
  let component: StartRedirectComponent;
  let fixture: ComponentFixture<StartRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
