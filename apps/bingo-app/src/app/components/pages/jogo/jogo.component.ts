import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { Jogo } from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.scss',
})
export class JogoComponent implements OnInit {
  jogoAtual: Jogo | null = null;

  constructor(private jogoService: JogoService) {
    /**
     * Adiciona um observador para o jogo armazenado na store para sempre
     * atualizar o jogo atual com o valor armazenado
     */
    this.jogoService.jogo$.subscribe((jogoArmazenado) => {
      this.jogoAtual = jogoArmazenado;
    });
  }

  ngOnInit(): void {
    this.lerTabela();
  }

  lerTabela() {
    this.jogoService.lerJogo();
  }

  jogarNumero(numeroSorteado: string) {
    this.jogoService.jogarNumeroSorteado(numeroSorteado);
  }
}
