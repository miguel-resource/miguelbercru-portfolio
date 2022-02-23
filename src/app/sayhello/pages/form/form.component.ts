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
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

/* Services */
import { MessagesService } from './../../../home/services/messages.service';
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
  formContact: FormGroup = new FormGroup({});
  nameControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', Validators.required);
  messageControl: FormControl = new FormControl('', Validators.required);

  constructor(
    private mesaggesService: MessagesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.formContact = this.formBuilder.group({
      name: this.nameControl,
      email: this.emailControl,
      message: this.messageControl
    });

  }

  sendMessage(): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de enviar el mensaje?',
      header: 'Confirmación',
      icon: 'pi pi-question',
      accept: () => {
        let message = {
          name: this.formContact.controls['name'].value,
          content: this.formContact.controls['message'].value,
          email: this.formContact.controls['email'].value
        }

        this.mesaggesService.create(message).then(() => {
          this.formContact.reset();
          this.msgs = [{
            severity: 'info',
            summary: 'Success',
            detail: 'Mensaje enviado correctamente'
          }];
        });
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
