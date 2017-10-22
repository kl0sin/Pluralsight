import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaiulComponent } from './product-detaiul.component';

describe('ProductDetaiulComponent', () => {
  let component: ProductDetaiulComponent;
  let fixture: ComponentFixture<ProductDetaiulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetaiulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaiulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
