import { Component } from '@angular/core';
import { publishGlobalUtil } from '@angular/core/src/render3/global_utils';
import { pureFunction1 } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productlist =[{

    pId : "0001",
    pName : "แปรงสีฟัน",
    pcost : 200,
    img : "https://www.ningnongmistine.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/8/38010.jpg"
  },
  {
    pId : "0002",
    pName : "แก้วน้ำ",
    pcost : 10,
    img : "../assets/img/pic1.jpg"
  },
  {
    pId : "0003",
    pName : "ยาสีฟัน",
    pcost : 20
  
  }];

  selectedProduct :any;
    selectProduct(p){
      this.selectedProduct = p;
      console.log(p);
    }
  constructor(){
  
  }
}

