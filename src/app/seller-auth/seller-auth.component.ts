import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { login, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  showLogin = true;
  constructor(private rout: Router, private seller: SellerService) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp) {
    this.seller.userSignUp(data);
  }

  login(data: login) {
    this.seller.userLogin(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
