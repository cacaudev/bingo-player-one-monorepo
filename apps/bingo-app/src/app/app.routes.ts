import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
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
