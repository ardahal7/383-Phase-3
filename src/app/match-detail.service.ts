import { Injectable } from '@angular/core';
import { matchDetail } from './matchDetail';

import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class matchDetailService {
  
  private matchDetailsUrl = 'https://na.api.pvp.net/api/lol/na/v2.2/match/2407496373?api_key=RGAPI-6183b5c3-47f1-48e3-a2da-a0736b7695fb';  /*Gets Match Details from matchID*/

  mode = 'Observable';
  constructor(private http: Http) { }

  getMatchDetails(): Observable<matchDetail> {
    return  this.http.get(this.matchDetailsUrl).map(this.extractData).catch(this.handleError); 
   
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};  
  }

  private handleError(error: Response | any) {
    
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
