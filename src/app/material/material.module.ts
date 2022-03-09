import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material Angula */
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule, TooltipComponent } from '@angular/material/tooltip';

/* PrimeNg */
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    TooltipModule,
    MatTooltipModule,
    MessagesModule,
    ConfirmDialogModule,
    ButtonModule,
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonToggleModule,
    TooltipModule,
    MessagesModule,
    ConfirmDialogModule,
    ButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
  static use(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
