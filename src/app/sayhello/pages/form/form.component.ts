import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {ConfirmationService} from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ConfirmationService],
  animations: [
    trigger('title', [
      state('void', style({
        transform: 'translateY(-30%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.8s', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('form', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class FormComponent implements OnInit {
  msgs: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  confirm(): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de enviar el mensaje?',
      header: 'Confirmación',
      icon: 'pi pi-question',
      accept: () => {
        this.msgs = [{
          severity: 'info',
          summary: 'Success',
          detail: 'Mensaje enviado correctamente'
        }]
      },
      reject: () => {
        this.msgs = [{
          severity:'error',
          summary:'Error',
          detail:'Mensaje cancelado'
        }]
      }
    })
  }

}
