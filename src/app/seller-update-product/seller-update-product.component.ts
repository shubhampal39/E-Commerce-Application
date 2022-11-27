import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/model/data.type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((data) => {
      this.productData = data
    })
  }

  submit(data: product) {

    if (this.productData)
      data.id = this.productData.id;

    this.productService.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = "Product has updated";
        // this.router.navigate(['seller-home'])

      }
    });

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000)
  }
}
