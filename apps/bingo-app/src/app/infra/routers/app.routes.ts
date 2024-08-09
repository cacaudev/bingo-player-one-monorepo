import { Route, RouterModule } from '@angular/router';
import { NovoJogoComponent } from '../../components/pages/novoJogo/novoJogo.component';
import { NgModule } from '@angular/core';

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

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
