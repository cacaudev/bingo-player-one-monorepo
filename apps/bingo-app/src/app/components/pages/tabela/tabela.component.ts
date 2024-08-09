import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from '@bingo-player-one-monorepo/bingo-ui';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent {

}
