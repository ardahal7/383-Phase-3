import { Injectable } from '@angular/core';
import { Summoner } from './summoner';

import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class SummonerService {
  private summonerUrl = 'https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=RGAPI-6183b5c3-47f1-48e3-a2da-a0736b7695fb';  /*URL to web API*/

  mode = 'Observable';
  constructor(private http: Http) { }
  summoner: Summoner;
  getSummoners(): Observable<Summoner> {
    return  this.http.get(this.summonerUrl).map(this.extractData).catch(this.handleError); 
   
  }

  private extractData(res: Response) {

    let body = res.json();
    
    return body.champions || {};
    
  }

  private handleError(error: Response | any) {
    /* In a real world app, we might use a remote logging infrastructure*/
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
