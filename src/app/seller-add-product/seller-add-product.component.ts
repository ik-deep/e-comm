import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(data:product){
    this.product.addProduct(data).subscribe((res)=>{
      if(res){
        // console.log(res);
      }
    });
  }
}
