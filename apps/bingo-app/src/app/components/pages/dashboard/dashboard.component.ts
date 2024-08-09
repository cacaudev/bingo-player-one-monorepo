import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private jogoService: JogoService) {}

  testConsole() {
    console.log('test console ---------');
  }
}
