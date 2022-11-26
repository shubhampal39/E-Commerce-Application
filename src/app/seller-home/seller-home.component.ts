import { Component, OnInit } from '@angular/core';
import { product } from 'src/model/data.type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productList().subscribe((result) => {
      this.productList = result;
      console.log(result);
    })
  }

}
