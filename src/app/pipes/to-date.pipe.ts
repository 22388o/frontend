import { Pipe, PipeTransform } from '@angular/core';
import { TerrajsService } from '../services/terrajs.service';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  constructor(private terrajs: TerrajsService) { }

  transform(value: number): Date {
    if (!value) {
      return undefined;
    }

    return this.terrajs.toDate(value);
  }

}
