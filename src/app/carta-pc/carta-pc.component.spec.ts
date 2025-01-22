import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPcComponent } from './carta-pc.component';

describe('CartaPcComponent', () => {
  let component: CartaPcComponent;
  let fixture: ComponentFixture<CartaPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaPcComponent]
    });
    fixture = TestBed.createComponent(CartaPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
