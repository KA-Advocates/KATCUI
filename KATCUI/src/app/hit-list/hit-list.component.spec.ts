import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitListComponent } from './hit-list.component';

describe('HitListComponent', () => {
  let component: HitListComponent;
  let fixture: ComponentFixture<HitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
