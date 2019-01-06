import { TestBed } from '@angular/core/testing';

import { NgxTradingCardService } from './ngx-trading-card.service';

describe('NgxTradingCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTradingCardService = TestBed.get(NgxTradingCardService);
    expect(service).toBeTruthy();
  });
});
