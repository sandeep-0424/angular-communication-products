import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ProductParameterService implements OnDestroy{
showImage:boolean;
filterBy:string;
  constructor() { 
    console.log('sevice is created');
  }
ngOnDestroy():void{
  console.log('sevice is destroyed');
}
}

