import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Pages */
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoudRountingModule { }
