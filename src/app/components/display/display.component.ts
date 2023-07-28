import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  @Input() comeParent=''
  @Output() dataEvent= new EventEmitter<string>();



  shareData(){
  const sendData='hellow brother How are you/////??????'
  this.dataEvent.emit(sendData)

  }
}



// @Output DataSend = new EventEmitter<string>();


// shareData(){
//   const data='hiii'

//   this.DataSend.emit(data)
// }