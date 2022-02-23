import { Component, OnInit } from '@angular/core';
/* Import services */
import { PortfolioService } from './../../services/portfolio.service'

/* Import models */
import { Portfolio } from './../../models/portfolio.model'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Portfolio[] = [];
  pageLinks: any;

  constructor(
    private portFolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portFolioService.getAll().subscribe((resp : any) => {
      this.projects = resp.map((project : any) => {
        return {
          name: project.payload.doc.data().name,
          description: project.payload.doc.data().description,
          githubLink: project.payload.doc.data().githubLink,
          pageLink: project.payload.doc.data().pageLink,
          figmaLink: project.payload.doc.data().figmaLink,
          img: project.payload.doc.data().img,
          thechnologies: project.payload.doc.data().thechnologies
        }
      });


    })
  }

}
