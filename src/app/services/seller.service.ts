import { HttpClient } from '@angular/common/http';
import { login, signUp } from 'src/model/data.type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellarLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: signUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      this.isSellarLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home'])
      console.log(result)
    })
  }

  reLoadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellarLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }

  }

  userLogin(data: login) {
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          console.warn("login")
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home'])
        }
        else {
          console.warn("logn failed")
          this.isLoginError.emit(true);
        }

      })
  }
}
