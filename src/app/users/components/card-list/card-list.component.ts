import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {slideInAnimation } from '../../../../assets/route-animations';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [slideInAnimation]
})
export class CardListComponent implements OnInit {
  @Input() cardList: [];
  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  // emits the object representing the card
  onClick(card) {
    this.cardClicked.emit(card);
  }
}
