import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'constrasena'
})
export class ConstrasenaPipe implements PipeTransform {
	transform(value: any, activar: boolean = true): any {
		if (activar) {
			let salida: string = '';
			for (let i = 1; i <= value.length; i++) {
				salida += '*';
			}
			return salida;
		} else {
			return value;
		}
	}
}
