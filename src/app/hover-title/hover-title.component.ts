import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  animateChild,
  query,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-hover-title',
  templateUrl: './hover-title.component.html',
  styleUrls: ['./hover-title.component.css'],
  host: {
    '[style.top.px]': 'top',
    '[style.left.px]': 'left',
    '[@show]': "'visible'",
    '[@resize]': "data"
  },
  animations: [
    trigger('show', [
      state('void', style({
        transform: 'translateX(50px)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0px)',
        opacity: 1
      })),
      transition(':enter, :leave', [
        animate('.1s')
      ])
    ])
    ,
    trigger('resize',[
      transition('* <=> *',[
        group([
          animate('.15s', style({
            height: '*',
            width: '*'
          })),
          query('div', [
            animate('.15s linear', keyframes([
              style({ opacity: 0, offset: 0 }),
              style({ opacity: 1, offset: 1 })
            ]))
          ])
        ])
      ])
    ])
  ]
})
export class HoverTitleComponent<T> implements OnInit {

  @Input() data!: T;

  @Input() top!: number
  @Input() left!: number

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
