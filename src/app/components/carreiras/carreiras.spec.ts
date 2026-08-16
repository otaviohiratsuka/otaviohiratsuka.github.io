import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carreiras } from './carreiras';

describe('Carreiras', () => {
  let component: Carreiras;
  let fixture: ComponentFixture<Carreiras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carreiras],
    }).compileComponents();

    fixture = TestBed.createComponent(Carreiras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
