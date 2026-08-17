import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

// 1. Importando o Header e o Footer
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Adicionando o Header e o Footer na lista de imports do componente
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  // Ajuste a extensão do estilo se você estiver usando .scss no lugar de .css
  styleUrl: './app.css'
})
// 3. Mudando o nome de AppComponent de volta para App
export class App implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        once: false,
        duration: 1000,
        offset: 120,
        easing: 'ease-out-cubic'
      });
    }
  }
}