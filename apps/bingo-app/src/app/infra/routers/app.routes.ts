import { Route, RouterModule } from '@angular/router';
import { NovoJogoComponent } from '../../components/pages/novoJogo/novoJogo.component';
import { NgModule } from '@angular/core';
import { JogoComponent } from '../../components/pages/jogo/jogo.component';
import { TabelaComponent } from '../../components/pages/tabela/tabela.component';
import { ConfiguracaoComponent } from '../../components/pages/configuracaoTabela/configuracao.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NovoJogoComponent,
    pathMatch: 'full',
  },
  {
    path: 'config',
    component: ConfiguracaoComponent,
    pathMatch: 'full',
  },
  {
    path: 'tabela',
    component: TabelaComponent,
    pathMatch: 'full',
  },
  {
    path: 'jogo',
    component: JogoComponent,
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
