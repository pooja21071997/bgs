import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gurukul } from './gurukul';

describe('Gurukul', () => {
  let component: Gurukul;
  let fixture: ComponentFixture<Gurukul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gurukul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gurukul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
