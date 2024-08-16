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

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [CommonModule, ButtonUIComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.scss',
})
export class ConfiguracaoComponent implements OnInit {
  constructor(private jogoService: JogoService, private router: Router) {}

  formConfiguracao!: FormGroup;

  botaoCriarIsLoading = false;

  /**
   * @private
   * Método para criar o reactive form com a validação do domínio
   */
  private criarFormulario() {
    const gridSizeValidators = [Validators.required];
    const regraValidators = [Validators.required];

    this.formConfiguracao = new FormGroup({
      numeroLinhas: new FormControl(3, gridSizeValidators),
      numeroColunas: new FormControl(3, gridSizeValidators),
      umaLinhaMarcada: new FormControl(false, regraValidators),
      umaColunaMarcada: new FormControl(false, regraValidators),
      todosOsCamposMarcados: new FormControl(true, regraValidators),
    });
  }

  ngOnInit(): void {
    this.formConfiguracao;
  }

  validarFormulario(): boolean {
    return true;
  }

  criarJogo() {
    this.jogoService.novoJogo(3, 3);
    this.router.navigate(['/tabela']);
  }
}
