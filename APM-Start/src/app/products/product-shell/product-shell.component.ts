import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
    pageTitle: string = 'Products';
    monthCount: number;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.SelectedProductChange$.subscribe((selectedProduct)=>{
      if(selectedProduct){
          let start = new Date(selectedProduct.releaseDate);
          const now = new Date();
      this.monthCount = now.getMonth()-start.getMonth() + (12 * (now.getFullYear()-start.getFullYear()));
   
         
      }
        })
    }

}
