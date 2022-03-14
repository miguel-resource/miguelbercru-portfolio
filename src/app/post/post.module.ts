import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { PostMainComponent } from './pages/post-main/post-main.component';
import { PostRoutingModule } from './post-routing.module'


@NgModule({
  declarations: [
    ContentComponent,
    PostMainComponent
  ],
  imports: [
    PostRoutingModule,
    CommonModule
  ]
})
export class PostModule { }
