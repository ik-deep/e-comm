import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
productList:undefined | product[];
deletIcon=faTrash;
editIcon = faEdit;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
   this.list();
  }

  deleteProduct(id:number){
        this.product.deletProduct(id).subscribe((res)=>{
          if(res){
             console.log(res);
             this.list();
          }
        });
  }
list(){
  this.product.productList().subscribe((res)=>{
    this.productList=res;
  })
}

editProduct(){
   
}
}
