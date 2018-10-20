import { TestBed, inject } from '@angular/core/testing';

import { GooleService } from './goole.service';

describe('GooleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooleService]
    });
  });

  it('should be created', inject([GooleService], (service: GooleService) => {
    expect(service).toBeTruthy();
  }));
});
