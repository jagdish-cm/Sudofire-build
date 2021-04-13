import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() item: string;
  @Output() newItemEvent = new EventEmitter<string>();
  childItem : string = '';

  constructor() { }

  ngOnInit(): void {

  }

  addNewItem() {
    this.newItemEvent.emit(this.childItem);
  }
}
