import { Component, OnInit } from '@angular/core';
import { product } from 'src/model/data.type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | product[];
  productMessage: string | undefined;
  icon = faTrash;
  iconEdit = faEdit;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    console.log(id);
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted";
        this.list();
      }
    })
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }


  list() {
    this.productService.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
