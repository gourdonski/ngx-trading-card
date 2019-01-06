import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTradingCardComponent } from './ngx-trading-card.component';

describe('NgxTradingCardComponent', () => {
  let component: NgxTradingCardComponent;
  let fixture: ComponentFixture<NgxTradingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTradingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTradingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
