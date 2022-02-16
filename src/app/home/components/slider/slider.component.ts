import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
