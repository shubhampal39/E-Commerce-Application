import { Component, VERSION } from '@angular/core';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sellerService: SellerService) { }


}
