import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayScholarSchool } from './day-scholar-school';

describe('DayScholarSchool', () => {
  let component: DayScholarSchool;
  let fixture: ComponentFixture<DayScholarSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayScholarSchool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayScholarSchool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
