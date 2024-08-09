/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorProvider {
  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'Não há conexão com a internet.';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): any {
    return error.stack;
  }
}
