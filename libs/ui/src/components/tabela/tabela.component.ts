import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tabela } from '@bingo-player-one-monorepo/bingo-domain';
import { CampoComponent } from '../campo/campo.component';

@Component({
  selector: 'lib-jogo-tabela',
  standalone: true,
  imports: [CommonModule, CampoComponent],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent {
  @Input() tabelaLinhas = 3;
  @Input() tabelaColunas = 3;
  tabela: Tabela;


  constructor() {
    this.tabela = new Tabela(this.tabelaColunas, this.tabelaLinhas);

  }
}
