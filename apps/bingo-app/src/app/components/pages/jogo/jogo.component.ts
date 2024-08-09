import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.scss',
})
export class JogoComponent implements OnInit{
  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.lerTabela();
  }

  lerTabela() {
    this.jogoService.lerJogo();
  }


  jogarNumero(numeroSorteado: number) {
    this.jogoService.jogarNumeroSorteado(numeroSorteado);
  }
}
