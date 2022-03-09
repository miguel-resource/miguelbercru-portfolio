import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module'
/* Router */
import { BlogRoutingModule } from './blog-routing.module';

/* Components */
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPublicationsComponent } from './components/main-publications/main-publications.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecentlyViewComponent } from './components/recently-view/recently-view.component';
import { NewPostComponent } from './components/new-post/new-post.component'




@NgModule({
  declarations: [
    BlogHomeComponent,
    HeaderComponent,
    CategoriesComponent,
    MainPublicationsComponent,
    RecentlyViewComponent,
    NewPostComponent,
  ],
  imports: [
  MaterialModule,
    CommonModule,
    BlogRoutingModule,
    RouterModule,
  ]
})
export class BlogModule { }
