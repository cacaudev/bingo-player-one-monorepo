import {
  Jogo,
  RegrasBingo,
  Tabela,
} from '@bingo-player-one-monorepo/bingo-domain';
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
  jogo$ = this.jogoSubject.asObservable();

  novoJogo(
    tabela: { quantidadeLinhas: number; quantidadeColunas: number },
    regras: {
      linhaMarcada: boolean;
      colunaMarcada: boolean;
      tabelaMarcada: boolean;
    }
  ) {
    const currentDate = new Date();
    const nomeJogo = `Bingo - ${currentDate.toDateString()}`;
    const aJogo = new Jogo(nomeJogo, tabela.quantidadeColunas, tabela.quantidadeLinhas);
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

  jogarNumeroSorteado(numeroSorteado: string) {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    this.jogoSubject.value.jogarNumero(numeroSorteado);
  }

  setarRegras(regras: RegrasBingo) {
    if (!this.jogoSubject.value) {
      throw new Error('NO_GAME_ON_STORE');
    }
    this.jogoSubject.value.regras.atualizarLinhaMarcada(
      regras.getLinhaMarcada()
    );
    this.jogoSubject.value.regras.atualizarColunaMarcada(
      regras.getColunaMarcada()
    );
    this.jogoSubject.value.regras.atualizarTabelaMarcada(
      regras.getTabelaMarcada()
    );
  }
}
