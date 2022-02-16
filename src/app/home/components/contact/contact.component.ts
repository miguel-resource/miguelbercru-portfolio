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
      link: '#',
    },
    /* Email */
    {
      icon: 'far fa-envelope',
      link: '#',
    },
    /* Linkedin */
    {
      icon: 'fab fa-linkedin-in',
      link: '#',
    },
    /* Github */
    {
      icon: 'fab fa-github-square',
      link: '#',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
