import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name : "takePlaceSoon"})
export class TakePlaceSoon implements PipeTransform {

  transform(date: Date, offSet: number): boolean {

    return ( date > new Date() ) && ( date.getTime() < ((new Date()).getTime() + offSet * 24 * 3600 * 1000) );
  }

}
