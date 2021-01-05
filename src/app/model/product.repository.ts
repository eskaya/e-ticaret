import {Injectable, OnInit} from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRepository implements OnInit{
    private products: Product[] = [];

    constructor( private restService: RestService){}

    ngOnInit() {
      this.restService
        .getProducts()
        .subscribe( product=> this.products = product);        
    }

    getProduct(id: number): Product {
        return this.products.find(i => i.id === id);
    }
}