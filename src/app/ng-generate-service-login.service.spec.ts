import { TestBed } from '@angular/core/testing';

import { NgGenerateServiceLoginService } from './ng-generate-service-login.service';

describe('NgGenerateServiceLoginService', () => {
  let service: NgGenerateServiceLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGenerateServiceLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
