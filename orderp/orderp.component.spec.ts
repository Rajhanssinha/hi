import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpComponent } from './orderp.component';

describe('OrderpComponent', () => {
  let component: OrderpComponent;
  let fixture: ComponentFixture<OrderpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
