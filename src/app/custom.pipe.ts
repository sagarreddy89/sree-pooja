import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:any,args?:any):any {
    if(value.length>60){
      return value.substr(0,60)+'...';
    }
    else{
      return value;
    }
  }

}
