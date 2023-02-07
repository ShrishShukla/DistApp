import { Component,OnInit } from '@angular/core';
import{ Constants } from '../app/config/costants'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = Constants.TitleOfSite; 
  public modalShow = false;
  constructor() { 

  } 
  ngOnInit() { 
      console.log(this.title); 
  } 
  getLoginModal(){
    this.modalShow=true;
  }
}
