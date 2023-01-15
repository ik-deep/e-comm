import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  constructor(private rout: ActivatedRoute, private product: ProductService, private router:Router) { }

  ngOnInit(): void {
    let productId = this.rout.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((res) => {
      this.productData = res;
    })
  }
  submit(value: product) {
    if(this.productData){
      value.id=this.productData.id; 
      }
    this.product.updateProduct(value).subscribe((res)=>{
      if(res){
        this.router.navigate(['seller-home']);
      }
    });
  }

}
