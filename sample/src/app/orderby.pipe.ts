import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
})
export class OrderbyPipe implements PipeTransform {
  columnName = 'firstName';
  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    } // sort 1d array
    this.columnName = column;
    value.sort(this.orderBy);
    return value;
  }
  orderBy(a: any, b: any) {
    let valueOfSort = [a.firstName, b.firstName];
    valueOfSort.sort();
    return a.firstName === valueOfSort[0] ? -1 : 1;
  }
}
