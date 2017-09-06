import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() sku: any;
  @Input() price: any;
  @Input() displayname: any;
  @Input() img: any;
  @Input() quantity: any;
  constructor() { }

  ngOnInit() {
  }

}
