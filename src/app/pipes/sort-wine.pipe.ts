import { Pipe, PipeTransform } from '@angular/core';
import { Wine } from '../models/wine';

@Pipe({
  name: 'sortWine'
})
export class SortWinePipe implements PipeTransform {
  transform(wine: Wine[], args: [string, string]): Wine[] {
    if (!args || args.length < 2 || !wine) {
        return;
    }
    const criteria = args[0],
        order = args[1],
        result = wine;

    result.sort((a: Wine, b: Wine) => a.compare(criteria, b));

    if (order === 'desc') {
        result.reverse();
    }

    return result;
  }
}
