import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit,OnChanges,AfterViewInit {
  _listFilter:string;
  constructor() { }

  @ViewChild('filterElement') filterElementRef :ElementRef;
  @Input() displayDetail : boolean;
  @Input() hitCount:number;
  @Output() valueChange : EventEmitter<string> =  new EventEmitter<string>();
  hitMessage:string;
  
  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes);
    if(changes['hitCount'] && !changes['hitCount'].currentValue){
this.hitMessage = "No Matches Found"
    }
    else{
      this.hitMessage = ` Hit Count is ${this.hitCount}`
    }
  }
  ngOnInit() {
  }
ngAfterViewInit():void{
  if(this.filterElementRef.nativeElement){
    this.filterElementRef.nativeElement.focus();
    }
}
set listFilter(value:string) {
 this._listFilter = value;
 this.valueChange.emit(value);
}
get listFilter():string{
return this._listFilter;
}
}
