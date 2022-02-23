import { Component, OnInit } from '@angular/core';

/* Models */
import { Contacto } from './../../models/contactos.model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactos: Contacto[] = [
    /* Telegram */
    {
      icon: 'fab fa-telegram-plane',
      link: 'https://t.me/miguelbc_UwU',
    },
    /* Email */
    {
      icon: 'far fa-envelope',
      link: 'mailto:miguelbercru27@gmail.com',
    },
    /* Linkedin */
    {
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/in/miguel-berm%C3%BAdez-cruz-797395192/',
    },
    /* Github */
    {
      icon: 'fab fa-github-square',
      link: 'https://github.com/miguel-resource',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
