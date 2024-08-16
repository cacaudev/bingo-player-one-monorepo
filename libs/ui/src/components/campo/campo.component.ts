import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValorCampo } from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  selector: 'lib-jogo-campo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campo.component.html',
  styleUrl: './campo.component.scss',
})
export class CampoComponent {
  @Input() valor: ValorCampo = "1";
  @Input() marcado = false;
  @Input() x = -1;
  @Input() y = -1;
  @Input() considerarCampo = true;

  getBordaCampoCor() {
    return {
      'border-color': this.marcado || !this.considerarCampo ? 'red' : 'blue',
    };
  }
}
