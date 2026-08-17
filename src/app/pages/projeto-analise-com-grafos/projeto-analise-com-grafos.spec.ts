import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAnaliseComGrafos } from './projeto-analise-com-grafos';

describe('ProjetoAnaliseComGrafos', () => {
  let component: ProjetoAnaliseComGrafos;
  let fixture: ComponentFixture<ProjetoAnaliseComGrafos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoAnaliseComGrafos],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoAnaliseComGrafos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
