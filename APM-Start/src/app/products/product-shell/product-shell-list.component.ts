import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit {
  pageTitle: string = 'Products';
  errorMessage: string;
  products: IProduct[];
selectedProduct:IProduct|null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
//  this.productService.SelectedProductChange$.subscribe((data)=>{
// this.selectedProduct = data;
//  })

    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error: any) => this.errorMessage = <any>error
    );
  
  }
  getList(product):void{
  // this.productService.currentProduct = product;   
  this.productService.ChangeSelectedProduct(product)
  }

}
