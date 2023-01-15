import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: undefined | product[];
  trendyProducts:undefined | product[];
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.popularProduct().subscribe((res)=>{
      if(res){
        this.productList=res;
      }
    })
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

}
