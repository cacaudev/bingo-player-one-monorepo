import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jogo } from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
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
