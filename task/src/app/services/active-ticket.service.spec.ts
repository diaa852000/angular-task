import { TestBed } from '@angular/core/testing';

import { ActiveTicketService } from './active-ticket.service';

describe('ActiveTicketService', () => {
  let service: ActiveTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
