import { Component, OnInit, Input } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct:any;
      addProduct:any;
      addCart()
      {
        this.addProduct=this.selectedProduct;
        console.log(this.selectedProduct);
      }
  ngOnInit() {
  }
  constructor() {




  }
}
