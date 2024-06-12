import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBakedGoodsComponent } from './new-baked-goods.component';

describe('NewBakedGoodsComponent', () => {
  let component: NewBakedGoodsComponent;
  let fixture: ComponentFixture<NewBakedGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBakedGoodsComponent]
    });
    fixture = TestBed.createComponent(NewBakedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
