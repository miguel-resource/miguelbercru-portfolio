import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component'
import { SharedModule } from './../shared/shared.module';
import { IamComponent } from './components/iam/iam.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


import { MaterialModule } from '../material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactComponent } from './components/contact/contact.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    IamComponent,
    SliderComponent,
    PortfolioComponent,
    ContactComponent,
    DocumentsComponent
  ],
  imports: [
    RouterModule,
    MatTooltipModule,
    MaterialModule,
    EmojiModule,
    SwiperModule,
    SharedModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
