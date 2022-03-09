import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { BlogHomeComponent } from './pages/blog-home/blog-home.component'

const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
