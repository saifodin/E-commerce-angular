import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSpadComponent } from './shop-spad.component';

describe('ShopSpadComponent', () => {
  let component: ShopSpadComponent;
  let fixture: ComponentFixture<ShopSpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
