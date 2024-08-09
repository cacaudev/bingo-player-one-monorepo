import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from '@bingo-player-one-monorepo/bingo-ui';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.scss',
})
export class JogoComponent {

}
