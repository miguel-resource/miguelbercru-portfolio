import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Pages */
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SayhelloRountingModule { }
