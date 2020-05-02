import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { CriteriaComponent } from '../shared/criteria/criteria.component';
import { ProductParameterService } from './product-parameter.service';


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {
    pageTitle: string = 'Product List';
  
    //showImage: boolean;

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
     includeDetail:boolean = true; 
     parentFilter:string;

    filteredProducts: IProduct[];
    products: IProduct[];
  
    constructor(private productService: ProductService, private productParameterService: ProductParameterService) { }
get showImage():boolean{
return this.productParameterService.showImage;
}
set showImage(value:boolean){
    this.productParameterService.showImage = value;
}
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.filterComponet.listFilter =  this.productParameterService.filterBy
             //   this.performFilter(this.parentFilter);
               
            },
               
            (error: any) => this.errorMessage = <any>error
        );
    }
   @ViewChild(CriteriaComponent) filterComponet : CriteriaComponent;
   // @ViewChildren(NgModel)inputElementRefs : QueryList<NgModel>
   //@ViewChild(NgModel) inputRefs : NgModel;
ngAfterViewInit():void { 
   // if not null then if condition is valid//
   console.log(this.filterComponet);
   this.parentFilter = this.filterComponet.listFilter;
//console.log(this.inputElementRefs);
// this.inputRefs.valueChanges.subscribe(()=>{
// this.performFilter(this.listFilter);
// })

}
 /*   private _listFilter:string;
    
set listFilter(value:string){
this._listFilter = value;
this.performFilter(this.listFilter);
}    
get listFilter():string{
return this._listFilter;
}*/
onValueChange(value:string):void {
    this.productParameterService.filterBy = value;
    this.performFilter(value); 
}


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }
  
}
