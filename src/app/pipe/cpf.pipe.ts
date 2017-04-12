import { CpfUtils } from './../utils/cpfutils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return CpfUtils.formatar(value);
  }

}
