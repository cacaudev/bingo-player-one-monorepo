import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonUIComponent } from '@bingo-player-one-monorepo/bingo-ui';
import { JogoService } from '../../../infra/services/Jogo.service';
import { Router } from '@angular/router';
import {
  IRegrasBingoDTO,
  ITabelaDTO,
  RegrasBingo,
  Tabela,
} from '@bingo-player-one-monorepo/bingo-domain';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.scss',
})
export class ConfiguracaoComponent implements OnInit {
  constructor(private jogoService: JogoService, private router: Router) {}

  formTabela!: FormGroup;
  formRegras!: FormGroup;

  botaoCriarIsLoading = false;

  /**
   * @private
   * Método para criar o reactive form com a validação do domínio
   */
  private criarFormularios() {
    const gridSizeValidators = [Validators.required];
    const regraValidators = [Validators.required];

    this.formTabela = new FormGroup({
      quantidadeLinhas: new FormControl(3, gridSizeValidators),
      quantidadeColunas: new FormControl(3, gridSizeValidators),
    });

    this.formRegras = new FormGroup({
      linhaMarcada: new FormControl(false, regraValidators),
      colunaMarcada: new FormControl(false, regraValidators),
      tabelaMarcada: new FormControl(true, regraValidators),
    });
  }

  ngOnInit(): void {
    this.criarFormularios();
    this.botaoCriarIsLoading = false;
  }

  validarFormularioTabela(tabelaDTO: ITabelaDTO): boolean {
    if (!this.formTabela.valid) {
      this.formTabela.markAllAsTouched();
      return false;
    }
    try {
      new Tabela(tabelaDTO.quantidadeColunas, tabelaDTO.quantidadeLinhas);
    } catch (error) {
      console.log('Erro do domínio: ', error);
      return false;
    }
    return true;
  }

  validarFormularioRegras(regrasDTO: IRegrasBingoDTO): boolean {
    if (!this.formRegras.valid) {
      this.formRegras.markAllAsTouched();
      return false;
    }
    try {
      RegrasBingo.criarCustomizado(
        regrasDTO.linhaMarcada,
        regrasDTO.colunaMarcada,
        regrasDTO.tabelaMarcada
      );
    } catch (error) {
      console.log('Erro do domínio: ', error);
      return false;
    }
    return true;
  }

  criarJogo() {
    const regrasBingo = this.formRegras.getRawValue() as IRegrasBingoDTO;
    if (!this.validarFormularioRegras(regrasBingo)) return;

    const tabelaConfiguracao = this.formTabela.getRawValue() as ITabelaDTO;

    if (!this.validarFormularioTabela(tabelaConfiguracao)) return;

    this.botaoCriarIsLoading = true;

    this.jogoService.novoJogo(
      {
        quantidadeColunas: tabelaConfiguracao.quantidadeColunas,
        quantidadeLinhas: tabelaConfiguracao.quantidadeLinhas,
      },
      {
        linhaMarcada: regrasBingo.linhaMarcada,
        colunaMarcada: regrasBingo.colunaMarcada,
        tabelaMarcada: regrasBingo.tabelaMarcada,
      }
    );
    this.botaoCriarIsLoading = false;
    this.router.navigate(['/tabela']);
  }
}
