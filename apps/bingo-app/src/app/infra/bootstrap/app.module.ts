import {
  CUSTOM_ELEMENTS_SCHEMA,
  ErrorHandler,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../routers/app.routes';
import { RouterClientProvider } from '../providers/RouterClient.provider';
import { LocalStorageProvider } from '../providers/LocalStorage.provider';
import { ErrorProvider } from '../providers/Error.provider';
import { GlobalErrorHandler } from '../error/globalErrorHandler';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: 'IRouterProvider', useClass: RouterClientProvider },
    { provide: 'IStorageProvider', useClass: LocalStorageProvider },
    ErrorProvider,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
