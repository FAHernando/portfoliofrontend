import { TestBed } from '@angular/core/testing';

import { PortfolioAlexisService } from './portfolio-alexis.service';

describe('PortfolioAlexisService', () => {
  let service: PortfolioAlexisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioAlexisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
