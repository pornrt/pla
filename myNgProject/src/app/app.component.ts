import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productlist =[{

    pId : "0001",
    pName : "แปรงสีฟัน",
    pcost : 200
  },
  {
    pId : "0002",
    pName : "แก้วน้ำ",
    pcost : 10
  },
  {
    pId : "0003",
    pName : "ยาสีฟัน",
    pcost : 20
  
  }];

  constructor(){
  
  }
}

