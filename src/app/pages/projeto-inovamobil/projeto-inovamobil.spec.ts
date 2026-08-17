import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoInovamobil } from './projeto-inovamobil';

describe('ProjetoInovamobil', () => {
  let component: ProjetoInovamobil;
  let fixture: ComponentFixture<ProjetoInovamobil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoInovamobil],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoInovamobil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
