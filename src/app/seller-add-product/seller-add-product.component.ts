import { Component, OnInit } from '@angular/core';
import { product } from 'src/model/data.type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  submit(data: product) {
    this.productService.addProduct(data).subscribe((result) => {
      if (result) {
        this.addProductMessage = "Product is successsfully added"
      }
      setTimeout(() => this.addProductMessage = undefined, 3000);
    })
  }
}
