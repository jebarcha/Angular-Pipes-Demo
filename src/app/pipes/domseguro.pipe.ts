import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
	constructor(private domSanitizer: DomSanitizer) {}

	transform(value: string, url: string): any {
		console.log('value', value);
		console.log('url', url);
		return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
	}
}
