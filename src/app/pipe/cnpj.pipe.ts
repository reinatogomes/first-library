import { CnpjUtils } from '../utils/cnpjutils'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return CnpjUtils.formatar(value);
  }

}
