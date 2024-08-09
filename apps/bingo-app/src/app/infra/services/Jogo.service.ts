import { Jogo, Tabela } from '@bingo-player-one-monorepo/bingo-domain';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * Gerencia estado do jogo atual
 */
export class JogoService {
  private jogoSubject = new BehaviorSubject<Jogo | null>(null);

  novoJogo(numberOfLines: number, numberOfColumns: number) {
    const currentDate = new Date();
    const nomeJogo = `Bingo - ${currentDate.toDateString()}`;
    const aJogo = new Jogo(nomeJogo, numberOfColumns, numberOfLines);
    this.jogoSubject.next(aJogo);
  }

  lerJogo(): Jogo | null {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    return this.jogoSubject.value;
  }

  getNome(): string {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    return this.jogoSubject.value.getNome();
  }

  getTabela(): Tabela {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    return this.jogoSubject.value.tabela;
  }

  jogarNumeroSorteado(numeroSorteado: number) {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    this.jogoSubject.value.jogarNumero(numeroSorteado);
  }
}
