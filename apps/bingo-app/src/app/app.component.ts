import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Jogo } from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bingo-app';

  showTabela() {
    const novoJogo = new Jogo('Teste Tabela', 2, 2);
    return novoJogo.getNome();
  }
}
