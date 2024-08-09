import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { TabelaComponent } from '../../components/pages/tabela/tabela.component';
import { JogoComponent } from '../../components/pages/jogo/jogo.component';
import { ConfiguracaoComponent } from '../../components/pages/configuracaoTabela/configuracao.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
