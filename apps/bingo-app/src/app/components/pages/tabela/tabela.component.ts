import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent, RouterLink],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent implements OnInit {
  constructor(private jogoService: JogoService) {}
  ngOnInit(): void {
    this.showTabelaNome();
  }

  showTabelaNome(): string {
    return this.jogoService.getNome();
  }
}
