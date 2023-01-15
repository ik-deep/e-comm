import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, product, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private rout: Router) { }

  userSignUp(data: SignUp) {
    return this.http.post("http://localhost:3000/seller", data, { observe: 'response' })
      .subscribe((res) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(res.body));
        this.rout.navigate(['seller-home']);
      })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.rout.navigate(['seller-home']);
    }
  }

  userLogin(data: login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          localStorage.setItem('seller', JSON.stringify(res.body));
          this.rout.navigate(['seller-home']);
        } else {
          console.warn('login falled');
        }
      })
  }
}
