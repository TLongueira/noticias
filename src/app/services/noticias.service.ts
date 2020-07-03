import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { Notis } from 'src/app/services/json';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

getTopHeadlines(){
  return Notis;
 // return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=ar&apiKey=c6f7a287fb6d45e68ca50c958701107d');
}

getTopHeadlinesBR(){
  return Notis;
  // return this.http.get<RespuestaTopHeadlines>
  // ('http://newsapi.org/v2/top-headlines?country=br&language=es&apiKey=c6f7a287fb6d45e68ca50c958701107d');
 }

 getRSS(){
   return this.http.get('https://www.clarin.com/rss/lo-ultimo/', { responseType: 'text' });
 }




}
