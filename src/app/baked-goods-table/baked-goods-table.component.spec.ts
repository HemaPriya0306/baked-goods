import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedGoodsTableComponent } from './baked-goods-table.component';

describe('BakedGoodsTableComponent', () => {
  let component: BakedGoodsTableComponent;
  let fixture: ComponentFixture<BakedGoodsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakedGoodsTableComponent]
    });
    fixture = TestBed.createComponent(BakedGoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
