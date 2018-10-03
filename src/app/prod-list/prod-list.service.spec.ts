import { TestBed } from '@angular/core/testing';

import { ProdListService } from './prod-list.service';

describe('ProdListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdListService = TestBed.get(ProdListService);
    expect(service).toBeTruthy();
  });
});
