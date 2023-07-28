import { Component } from '@angular/core';
import { CommanService } from 'src/app/Services/common/comman.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor(private comman: CommanService){}
 info ='';
 parentData =''


//practised work

fontColor = "red";
sayHelloId =1;
canClick = true;
message = "hellow, world"

call=0



sayMesaage(){
  alert(this.message)
}
//---------------------------------------
  getData(data:any){
    this.info=data
  }

  shareData() {
    this.parentData = 'Hello from Rushikesh!!!!!';
  }
//------------------------------

onLogMe(){
  this.comman.writeCount(this.call)
  this.call++;
}
}


