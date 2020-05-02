import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'pm-product-shell-detail',
    templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit,OnDestroy {
    pageTitle: string = 'Product Detail';
//  get product():IProduct|null{
//    return this.productService.currentProduct;
//  }
    constructor(private productService: ProductService) { }
product:IProduct|null;
sub:Subscription;
    ngOnInit() {
    this.sub =    this.productService.SelectedProductChange$.subscribe((data)=>{
        this.product = data;   
      })
  }
ngOnDestroy():void{
this.sub.unsubscribe();
}
}
