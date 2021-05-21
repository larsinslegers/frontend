import { Pipe, PipeTransform } from '@angular/core';
import { Plank } from './plank.model';

@Pipe({
  name: 'plankFilter'
})
export class PlankFilterPipe implements PipeTransform {

  transform(plank: Plank[], titel: string): Plank[] {
    if (!titel || titel.length === 0) {
      return plank;
    }
    return plank.filter(p =>
      p.titel.toLowerCase().startsWith(titel.toLowerCase())
    );
  }

}
