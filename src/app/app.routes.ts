import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjetoInovamobil } from './pages/projeto-inovamobil/projeto-inovamobil';
import { ProjetoAnaliseComGrafos } from './pages/projeto-analise-com-grafos/projeto-analise-com-grafos';
import { Futepong } from './pages/futepong/futepong';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'projeto-inovamobil',
        component: ProjetoInovamobil
    },
    {
        path: 'projeto-analise-com-grafos',
        component: ProjetoAnaliseComGrafos
    },
    {
        path: 'futepong',
        component: Futepong
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];