import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) {}


  ngOnInit(): void {
    /*
    this.noticiasService.getTopHeadlinesBR().subscribe((resp) => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
    */
  }

}