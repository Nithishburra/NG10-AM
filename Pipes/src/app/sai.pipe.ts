import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sai'
})
export class SaiPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return Array.from(value).reverse().join("");
  }

}
