import { TestBed, inject } from '@angular/core/testing';

import { PointageService } from './pointage.service';

describe('PointageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointageService]
    });
  });

  it('should be created', inject([PointageService], (service: PointageService) => {
    expect(service).toBeTruthy();
  }));
});
