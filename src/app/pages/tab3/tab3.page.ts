import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';
import { createTokenForReference } from '@angular/compiler/src/identifiers';
import { Noticia } from 'src/app/interfaces/clases';

const parseString = require('xml2js').parseString;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements OnInit {

  noticias: Article[] = [];
  noticia: Noticia = new Noticia();
  rss: any;
  constructor(private noticiasService: NoticiasService) {

  }


  ngOnInit(): void {
    this.noticiasService.getRSS().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      console.dir(result.rss.channel[0]);
      resp = result.rss.channel[0];
    });
      console.log(resp);
      this.noticia.title = resp.item[0].title;
      console.log(this.noticia);
    });


  }




}
