import { Component } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent {
  someValue:string ="";
  someValues: Array<string> = new Array<string>();

  submitData(){
    this.someValues.push(this.someValue);
    this.someValue="";
    
  }

}
