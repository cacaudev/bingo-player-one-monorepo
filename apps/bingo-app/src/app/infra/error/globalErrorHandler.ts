import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingProvider } from '../providers/Logging.provider';
import { ErrorProvider } from '../providers/Error.provider';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(private injector: Injector, private router: Router) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorProvider);
    const logger = this.injector.get(LoggingProvider);

    const message = errorService.getClientMessage(error);
    const stackTrace = errorService.getClientStack(error);

    logger.logError(message, stackTrace);

    if (error.message == 'NO_GAME_ON_STORE') {
      this.handleJogoInexistente();
    }
  }

  handleJogoInexistente() {
    console.log(
      'Não há um jogo salvo atualmente. Redirecionando usuário para inicio.'
    );
    this.navegarParaInicio();
  }

  navegarParaInicio() {
    this.router.navigate(['/']);
  }
}
