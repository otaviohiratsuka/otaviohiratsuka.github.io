import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futepong } from './futepong';

describe('Futepong', () => {
  let component: Futepong;
  let fixture: ComponentFixture<Futepong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futepong],
    }).compileComponents();

    fixture = TestBed.createComponent(Futepong);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
