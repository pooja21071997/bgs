import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalFacilities } from './educational-facilities';

describe('EducationalFacilities', () => {
  let component: EducationalFacilities;
  let fixture: ComponentFixture<EducationalFacilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalFacilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalFacilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
