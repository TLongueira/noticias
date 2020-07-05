import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia, Article } from 'src/app/interfaces/clases';
const parseString = require('xml2js').parseString;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  noticias: Article[] = [];
  noticia: Noticia = new Noticia();
  rss: any;
  constructor(private noticiasService: NoticiasService) {}


  ngOnInit(): void {
    this.noticiasService.getTelam().subscribe((resp: any) => {
      this.rss = resp;
    // tslint:disable-next-line: only-arrow-functions
      parseString(this.rss, function(err, result) {
      //console.dir(result.rss.channel[0]);
      resp = result.rss.channel[0];
    });
      for (let index = 0; index < 3; index++) {
        this.noticia.author="Agencia Telam";
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
  }

}
