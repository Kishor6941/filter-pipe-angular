import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length == 0 || searchTerm == '') {
      return value
    }
    return value.filter((productSearch) => productSearch.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
  }

}
