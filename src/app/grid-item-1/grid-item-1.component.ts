import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'grid-item-1',
  templateUrl: './grid-item-1.component.html',
  styleUrls: ['./grid-item-1.component.css']
})
export class GridItem1Component implements OnInit {
  
  @Input() new: any;
  @Input() sku: any;
  @Input() displayname: string;
  @Input() price: any;
  
  constructor() { }

  ngOnInit() {
  }

}
