import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projetos } from '../../components/projetos/projetos';
import { Tecnologias } from "../../components/tecnologias/tecnologias";
import { Carreiras } from "../../components/carreiras/carreiras";

@Component({
  selector: 'app-home',
  imports: [Hero, Projetos, Tecnologias, Carreiras],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
