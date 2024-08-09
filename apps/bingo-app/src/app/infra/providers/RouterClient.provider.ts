import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { IRouterProvider } from '../interfaces/IRouter.provider';

@Injectable({
  providedIn: 'root',
})
export class RouterClientProvider implements IRouterProvider {
  constructor(private router: Router) {}

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
