import { SelectItem } from "primeng/components/common/api";

export class ArrayUtils {

    static getIndexOfElementOfSelectItem(lista: SelectItem[], obj: any, campoComparacao: string) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].value && obj && obj[campoComparacao] === lista[i].value[campoComparacao]) {
                
                return i;
            }
        }
        return -1;
    }
}
