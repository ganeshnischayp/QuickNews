import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescComponent } from './item-desc.component';

describe('ItemDescComponent', () => {
  let component: ItemDescComponent;
  let fixture: ComponentFixture<ItemDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
