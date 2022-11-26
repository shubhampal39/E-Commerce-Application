import { HttpClient } from '@angular/common/http';
import { login, product, signUp } from 'src/model/data.type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }


    addProduct(data: product) {
        return this.http.post('http://localhost:3000/products', data);
    }

    productList() {
        return this.http.get<product[]>('http://localhost:3000/products');
    }

    deleteProduct(id: number) {
        return this.http.delete(`http://localhost:3000/products/${id}`);
    }

}