import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.scss',
})
export class ConfiguracaoComponent {

  constructor(private jogoService: JogoService, private router: Router) {}

  criarJogo() {
    this.jogoService.novoJogo(3,3);
    this.router.navigate(['/tabela'])
  }

}
