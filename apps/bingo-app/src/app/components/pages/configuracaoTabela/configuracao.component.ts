import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from '@bingo-player-one-monorepo/bingo-ui';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.scss',
})
export class ConfiguracaoComponent {

}
