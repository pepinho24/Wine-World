/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticlesServiceService } from './articles-service.service';

describe('ArticlesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesServiceService]
    });
  });

  it('should ...', inject([ArticlesServiceService], (service: ArticlesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
