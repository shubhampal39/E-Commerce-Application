import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/model/data.type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin: boolean = false;
  authError: string = '';
  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.sellerService.reLoadSeller();
  }

  signUp(data: signUp): void {
    this.sellerService.userSignUp(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
  login(data: signUp) {
    console.log(data);
    this.authError = '';
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((iserror) => {
      console.log(iserror)
      if (iserror) {
        this.authError = "Email or Paaword is not Correct";
      }
    })
  }
}
