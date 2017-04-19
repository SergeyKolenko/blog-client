import { TestBed, inject } from '@angular/core/testing';

import { CatherService } from './catcher.service';

describe('CatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatherService]
    });
  });

  it('should ...', inject([CatherService], (service: CatherService) => {
    expect(service).toBeTruthy();
  }));
});
