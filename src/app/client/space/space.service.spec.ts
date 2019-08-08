import { TestBed } from '@angular/core/testing';
import { OniService } from '../services/oni.service';


describe('SpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OniService = TestBed.get(OniService);
    expect(service).toBeTruthy();
  });
});
