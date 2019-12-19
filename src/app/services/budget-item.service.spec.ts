import { TestBed } from '@angular/core/testing';

import { BudgetItemService } from './budget-item.service';

describe('BudgetItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetItemService = TestBed.get(BudgetItemService);
    expect(service).toBeTruthy();
  });
});
