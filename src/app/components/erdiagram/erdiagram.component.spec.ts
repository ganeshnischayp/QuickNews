import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdiagramComponent } from './erdiagram.component';

describe('ErdiagramComponent', () => {
  let component: ErdiagramComponent;
  let fixture: ComponentFixture<ErdiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErdiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
