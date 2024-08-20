import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { Router, RouterLink } from '@angular/router';
import { Tabela } from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent, RouterLink],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent implements OnInit {
  tabelaAtual: Tabela | null = null;

  constructor(private jogoService: JogoService, private router: Router) {
    /**
     * Adiciona um observador para o jogo armazenado na store para sempre
     * atualizar a tabela atual com o valor armazenado
     */
    this.jogoService.jogo$.subscribe((jogoArmazenado) => {
      this.tabelaAtual = jogoArmazenado != null ? jogoArmazenado.tabela : null;
    });
  }

  ngOnInit(): void {
    this.showTabelaNome();
  }

  showTabelaNome(): string {
    return this.jogoService.getNome();
  }
  voltarPaginaInicial() {
    this.router.navigate(['/']);
  }
}
