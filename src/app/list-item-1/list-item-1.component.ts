import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'list-item-1',
  templateUrl: './list-item-1.component.html',
  styleUrls: ['./list-item-1.component.css']
})
export class ListItem1Component implements OnInit {

  @Input() new: any;
  @Input() sku: any;
  @Input() displayname: string;
  @Input() price: any;

  constructor() { }

  ngOnInit() {
  }

}
