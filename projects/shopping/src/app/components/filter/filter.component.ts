import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  //here marked with @input so it should be accept value from parent
  @Input() public ElectronicsCount:number =0;
  @Input() public JeweleryCount:number =0;
  @Input() public MensCount:number =0;
  @Input() public WomensCount:number =0;
 
  //1st step(import eventemitter also) (we used emitter event here) to send /emit the category name to parent means product compo
  @Output() public FilterChanged:EventEmitter<string> = new EventEmitter<string>();

  constructor(){

  }

  ngOnInit(): void {
    
  }
  public ButtonClick(e:any){
    //2nd step ,this will emit (we used emitter event here) means send the category name to parent (productcomponent)
    this.FilterChanged.emit(e.target.name);
  }
}
