import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  color='red';
  color1="black";
  condition = false;
  num:number;
  quote='';

  quotesArray = [
    "I can and I will",
    "Keep a part of yourself to yourself",
    "Be Good to people for no reason",
    "The important thing to remember is not to forget"
  ]
  name:string;
  count:number=1;

  


  
}
