import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoudRountingModule } from './page-not-foud-rounting.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    PageNotFoudRountingModule,
    CommonModule
  ]
})
export class PageNotFoundModule { }
