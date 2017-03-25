import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsPriceComponent } from './parts-price.component';

describe('PartsPriceComponent', () => {
  let component: PartsPriceComponent;
  let fixture: ComponentFixture<PartsPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
