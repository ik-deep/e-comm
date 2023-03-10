import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {product} from '../data-type'
import { ProductService } from '../services/product.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'
  sellerName: string = '';
  searchIcon = faSearch;
  searchResult: product[] | undefined;
  // searchResult=undefined|product[];
  constructor(private rout: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.rout.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller'
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name
          }
        } else {
          this.menuType = "default"
        }
      }
    })
  }
  
  logOut() {
    localStorage.removeItem('seller');
    this.rout.navigate(['/']);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=5
        }
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined
  }
  redirectToDetails(id:number){
    this.rout.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    console.warn(val)
  this.rout.navigate([`search/${val}`]);
  }
}
