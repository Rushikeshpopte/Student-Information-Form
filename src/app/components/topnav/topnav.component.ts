import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  data = '';

  acceptData = '';

  call ='';


  sendData() {
    this.data = 'welcome dear how are you dear you are fine beta';
  }

  revicedData(data: any) {
    this.acceptData = data;
  }

  missCall(resault:any){
    this.call = resault

  }
}
