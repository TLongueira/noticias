import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/clases';
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

  vermas(aux: string)
  {
    console.log(aux);

  }


  ngOnInit(): void {
    this.noticiasService.getClarin().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      //console.dir(result.rss.channel[0]);
      resp = result.rss.channel[0];
    });
      for (let index = 0; index < 3; index++) {
        this.noticia.author="Clarin";
        //this.noticia.content=resp.item[index].
        this.noticia.description=resp.item[index].description[0];
        this.noticia.publishedAt=resp.item[index].pubDate[0];
        this.noticia.title =resp.item[index].title[0];
        this.noticia.url=resp.item[index].link[0];
        this.noticia.urlToImage=resp.item[index].enclosure[0].$.url;
        //console.log(this.noticia);
        this.noticias.push(this.noticia)
        this.noticia=new Noticia();
      }
      //console.log(this.noticias);
    });

    this.noticiasService.getTn().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      //console.dir(result.rss.channel);
      resp = result.rss.channel[0];
    });
      for (let index = 0; index < 3; index++) {
        this.noticia.author="TN";
        //this.noticia.content=resp.item[index].
        this.noticia.description=resp.item[index].description;
        //this.noticia.publishedAt=resp.item[index].pubDate[0];
        this.noticia.title =resp.item[index].title;
        this.noticia.url=resp.item[index].link;
        this.noticia.urlToImage=resp.item[index].image;
        //console.log(this.noticia);
        this.noticias.push(this.noticia)
        this.noticia=new Noticia();
      }
      //console.log(this.noticias);
    });

    this.noticiasService.getPerfil().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      resp = result.rss.channel[0];
    });
      for (let index = 0; index < 3; index++) {
        this.noticia.author=resp.title;
        this.noticia.description=resp.item[index].description[0]._;
        this.noticia.publishedAt=resp.item[index].pubDate[0];
        this.noticia.title =resp.item[index].title;
        this.noticia.url=resp.item[index].link;
        this.noticia.urlToImage=resp.item[index].enclosure[0].$.url;
        this.noticias.push(this.noticia)
        this.noticia=new Noticia();
      }
    });

    this.noticiasService.getLavoz().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      resp = result.rss.channel[0];
    });
      for (let index = 0; index < 3; index++) {
        this.noticia.author="La Voz";
        this.noticia.description=resp.item[index].description[0];
        this.noticia.publishedAt=resp.item[index].pubDate[0];
        this.noticia.title =resp.item[index].title;
        this.noticia.url=resp.item[index].link;
        this.noticia.urlToImage=resp.item[index].enclosure[0].$.url;
        this.noticias.push(this.noticia)
        this.noticia=new Noticia();
      }
    });
    console.log(this.noticias)
  }
}
