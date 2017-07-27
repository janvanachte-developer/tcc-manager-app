import { TestBed, inject } from '@angular/core/testing';

import { ItemExistGuardService } from './item-exist-guard.service';

describe('ItemExistGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemExistGuardService]
    });
  });

  it('should be created', inject([ItemExistGuardService], (service: ItemExistGuardService) => {
    expect(service).toBeTruthy();
  }));
});
