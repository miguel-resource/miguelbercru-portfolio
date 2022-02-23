import { Component, OnInit } from '@angular/core';

/* Services */
import { DiplomasService } from '../../services/diplomas.service';

/* Models */
import { Diploma }  from '../../models/diplomas.model'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  diplomas: Diploma[] = [];

  constructor(
    private diplomasService: DiplomasService
  ) { }

  ngOnInit(): void {
    this.diplomasService.getAll().subscribe((resp: any) => {
      this.diplomas = resp.map((e:any) => {
        return {
          title: e.payload.doc.data().title,
          teacher: e.payload.doc.data().teacher,
          img: e.payload.doc.data().img
        }
      });
    })
  }

}
