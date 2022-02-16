import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss'],
  animations: [
    trigger('enterState', [
      state('void',style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1.3s', style({
          opacity: 1
        }))
      ])
    ]),
    trigger('leftState', [
      state('void',style({
        transform: 'translateX(-90%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.7s', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('logo', [
      state('void', style({
        transform: 'scale(1.1)',
      })),
      transition(':enter', [
        animate('0.6s', style({
          transform: 'scale(1)'
        }))
      ])
    ])
  ]
})
export class IamComponent implements OnInit {
  @ViewChild('animation') animate: ElementRef = new ElementRef('animation');

  constructor() { }

  ngOnInit(): void {
  }


}
