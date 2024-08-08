import { Route } from '@angular/router';
import { NovoJogoComponent } from './pages/novoJogo/novoJogo.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NovoJogoComponent,
    pathMatch: 'full',
  },
  {
    path: 'ui',
    loadComponent: () =>
      import('@bingo-player-one-monorepo/bingo-ui').then(
        (m) => m.BingoUiComponent
      ),
  },
];
