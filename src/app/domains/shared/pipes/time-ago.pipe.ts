import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    const today = new Date();
    const date = new Date(value);
    return formatDistance(today, date,{addSuffix:true,locale:es});
  }
}
