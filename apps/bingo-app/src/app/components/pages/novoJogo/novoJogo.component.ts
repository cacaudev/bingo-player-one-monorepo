import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Jogo } from '@bingo-player-one-monorepo/bingo-domain';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from '@bingo-player-one-monorepo/bingo-ui';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './novoJogo.component.html',
  styleUrl: './novoJogo.component.scss',
})
export class NovoJogoComponent implements OnInit {

 novoJogo: any = null;

  ngOnInit() {
    this.testConsole();
  }

  criarJogo() {
    const novoJogo = new Jogo('Teste Tabela', 2, 2);
    this.novoJogo = novoJogo;
  }

  mostrarNomeJogo() {
    return this.novoJogo.getNome();
  }

  testConsole() {
    console.log('test console ---------');
  }
}
