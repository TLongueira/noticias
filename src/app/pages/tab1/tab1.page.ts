import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article, RespuestaTopHeadlines } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  noticias: Article[] = [];
  aux: Article[] = [];
  respuesta: RespuestaTopHeadlines;
  constructor(private noticiasService: NoticiasService) {}


  ngOnInit(): void {
    /*
    this.noticiasService.getTopHeadlines().subscribe((resp) => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
    */
   this.respuesta = this.noticiasService.getTopHeadlines();

   this.aux.push(...this.respuesta.articles);

   // tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < this.aux.length; i++) {
     const element = this.aux[i].source.name;

     if (element !== 'Clarín' && element !== 'Infobae')
     {
      this.noticias.push(this.aux[i]);
     }
   }
  }

}
