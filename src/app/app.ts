import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('meu-portfolio');

  ngOnInit() {
    AOS.init({
      once: false,       // Essencial: false faz a animação repetir toda vez que você rolar
      duration: 1000,    // Tempo da animação em milissegundos (1 segundo)
      offset: 120,       // Começa a animar quando o elemento estiver 120px para dentro da tela
      easing: 'ease-out-cubic'
    });
  }
}
