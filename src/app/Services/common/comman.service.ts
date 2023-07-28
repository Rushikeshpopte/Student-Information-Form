import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommanService {
 writeCount(count:number){
  console.log(count);
  
 }
}
