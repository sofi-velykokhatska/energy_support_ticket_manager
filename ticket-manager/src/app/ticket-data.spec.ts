import { TestBed } from '@angular/core/testing';

import { TicketData } from './ticket-data';

describe('TicketData', () => {
  let service: TicketData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
