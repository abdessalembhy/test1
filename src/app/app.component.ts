import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  b= !true ;
  title = 'monastir';
  name='ecrire';
  list = ['1231', 'j' , 'jkjjk']
  log(){
     console.log(this.name)
  }    
  }
  
  export class Hero {
    id: number;
    name: string;
  }