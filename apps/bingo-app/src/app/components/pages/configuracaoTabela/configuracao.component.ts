import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
  constructor(
    private formBuilder: FormBuilder,
    private jogoService: JogoService,
    private router: Router
  ) {}

  formTabela!: FormGroup;
  formRegras!: FormGroup;

  botaoCriarIsLoading = false;

  tamanhoTabelas = [
    {
      id: 1,
      nome: '3x3',
    },
    { id: 2, nome: '5x5' },
  ];

  regrasBingo = [
    { id: 1, nome: 'Uma linha marcada' },
    { id: 2, nome: 'Uma coluna marcada' },
    { id: 3, nome: 'Todos os campos marcadas' },
  ];

  /**
   * @private
   * Método para criar o reactive form com a validação do domínio
   */
  private criarFormularios() {
    this.formTabela = this.formBuilder.group({
      tamanho: [null],
    });


    // TODO: MUDAR PARA RADIO OPTION
    this.formRegras = this.formBuilder.group({
      regra: [null],
    });
  }

  ngOnInit(): void {
    this.criarFormularios();
    this.botaoCriarIsLoading = false;

    this.setPadraoTamanhoTabela();
    this.setPadraoRegras();

    /**
     * Monitorar valor de tamanho da tabela
     */
    this.formTabela.get('tamanho')?.valueChanges.subscribe((f) => {
      this.onTamanhoChange(f);
    });

    /**
     * Monitorar valor de regra
     */
    this.formRegras.get('regra')?.valueChanges.subscribe((f) => {
      this.onRegraChange(f);
    });
  }

  onTamanhoChange(value: any) {
    console.log('value tamanho changed ', value);
  }
  onRegraChange(value: any) {
    console.log('value regra changed ', value);
  }

  setPadraoTamanhoTabela() {
    this.formTabela.get('tamanho')?.patchValue(2);
  }
  setPadraoRegras() {
    this.formRegras.get('regra')?.patchValue(3);
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
    /*  const regrasBingo = this.formRegras.getRawValue() as IRegrasBingoDTO;
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
    this.botaoCriarIsLoading = false;*/
    this.router.navigate(['/tabela']);
  }

  voltarPaginaInicial() {
    this.router.navigate(['/']);
  }
}
