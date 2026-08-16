import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projetos } from '../../components/projetos/projetos';
import { Tecnologias } from "../../components/tecnologias/tecnologias";
import { Carreiras } from "../../components/carreiras/carreiras";
import { Contato } from "../../components/contato/contato";

@Component({
  selector: 'app-home',
  imports: [Hero, Projetos, Tecnologias, Carreiras, Contato],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
