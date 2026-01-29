import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFacilities } from './transport-facilities';

describe('TransportFacilities', () => {
  let component: TransportFacilities;
  let fixture: ComponentFixture<TransportFacilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportFacilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportFacilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
