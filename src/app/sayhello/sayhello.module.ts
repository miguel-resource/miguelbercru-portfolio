import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayhelloRountingModule } from './sayhello-rounting.module'

import { MaterialModule } from '../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    SayhelloRountingModule,
    CommonModule
  ]
})
export class SayhelloModule { }
