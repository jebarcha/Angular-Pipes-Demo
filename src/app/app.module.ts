import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstrasenaPipe } from './pipes/constrasena.pipe';

registerLocaleData(localeEs);

@NgModule({
	declarations: [ AppComponent, CapitalizadoPipe, DomseguroPipe, ConstrasenaPipe ],
	imports: [ BrowserModule ],
	providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
