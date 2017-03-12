import { Injectable } from '@angular/core';
import { ISummoner } from './summoner';

import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http'
import {GrabNameComponent} from './grabName.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class SummonerService {
  
  public testingName: string = "Aayush";
  constructor(private http: Http) { }

  mode = 'Observable';
  
  summoner: ISummoner;
 getSummoners(name: string): Observable<ISummoner> {
    return this.http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ name + '?api_key=RGAPI-6183b5c3-47f1-48e3-a2da-a0736b7695fb')
    .map(this.extractData).catch(this.handleError); 
   
  }

  private extractData(res: Response) {
    console.log(res);
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
