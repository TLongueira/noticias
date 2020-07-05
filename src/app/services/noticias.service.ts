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

 getClarin(){
   return this.http.get('https://www.clarin.com/rss/politica/', { responseType: 'text' });
 }
 getTn(){
   return this.http.get('https://tn.com.ar/feed/politica', { responseType: 'text' });
 }
 getPerfil(){
   return this.http.get('https://www.perfil.com/rss/politica', { responseType: 'text' });
 }
 getLavoz(){
   return this.http.get('https://www.lavoz.com.ar/rss/politica.xml', { responseType: 'text' });
 }

getTelam()
{
  return this.http.get('https://www.telam.com.ar/rss2/politica.xml', {responseType:'text'});
}



}
