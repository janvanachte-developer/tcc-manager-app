import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailRouteComponent } from './item-detail-route.component';

describe('ItemDetailRouteComponent', () => {
  let component: ItemDetailRouteComponent;
  let fixture: ComponentFixture<ItemDetailRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
