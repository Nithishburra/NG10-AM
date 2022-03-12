import { TestBed } from '@angular/core/testing';

import { SampleServiceService } from './sample-service.service';

fdescribe('SampleServiceService', () => {
  let service: SampleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test should be created for add function',()=>{
     expect(service.add(2,2)).toEqual(4);
  })
});
