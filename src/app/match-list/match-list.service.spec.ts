import { TestBed, inject } from '@angular/core/testing';

import { MatchListService } from './match-list.service';

describe('MatchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchListService]
    });
  });

  it('should ...', inject([MatchListService], (service: MatchListService) => {
    expect(service).toBeTruthy();
  }));
});
