import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>()
  @Output() callData =new EventEmitter<string>()

  @Input() childData='';

  
  sendData(){
    const data= "welocome Rohit!!!!";
    this.dataEvent.emit(data)
    console.log('hello');
    const call= "calling from child"
    this.callData.emit(call)
    
  }

}
