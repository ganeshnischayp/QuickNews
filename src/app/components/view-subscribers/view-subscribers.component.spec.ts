import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubscribersComponent } from './view-subscribers.component';

describe('ViewSubscribersComponent', () => {
  let component: ViewSubscribersComponent;
  let fixture: ComponentFixture<ViewSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
