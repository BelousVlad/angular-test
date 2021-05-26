import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-hover-title',
  templateUrl: './hover-title.component.html',
  styleUrls: ['./hover-title.component.css'],
  host: {
    '[style.top.px]': 'top',
    '[style.left.px]': 'left',
    '[@show]': "isHidden ? 'hidden' : 'visible'"
  },
  animations: [
    trigger('show', [
      state('hidden', style({
        transform: 'translateX(50px)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0px)',
        opacity: 1
      })),
      // transition('visible => hidden', [
      //   animate('.1s', style({
      //     opacity: 0
      //   }))
      // ]),
      transition('visible <=> hidden', [
        animate('.1s')
      ])
    ])
  ]
})
export class HoverTitleComponent implements OnInit {

  @Input() data: any;

  top!: number
  left!: number
  isHidden: boolean = true

  constructor() { }

  setTop(value: number)
  {
    this.top = value;
  }
  setLeft(value: number)
  {
    this.left = value;
  }

  ngOnInit(): void {
    
  }

}
