import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tabela } from '@bingo-player-one-monorepo/bingo-domain';
import { CampoComponent } from '../campo/campo.component';

@Component({
  selector: 'lib-jogo-tabela',
  standalone: true,
  imports: [CommonModule, CampoComponent],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent implements OnInit {
  @Input() tabelaLinhas = 3;
  @Input() tabelaColunas = 3;

  tabela: Tabela = new Tabela(this.tabelaColunas, this.tabelaLinhas);

  ngOnInit(): void {
    this.tabela = new Tabela(this.tabelaColunas, this.tabelaLinhas);

    console.log("this.tabela ", JSON.stringify(this.tabela, null, 2));

  }
}
