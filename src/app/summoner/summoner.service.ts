import { ISummoner } from '../summoner/summoner';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http'
import {apiKey} from '../api-key';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SummonerService {
  public myApiKey = apiKey.key;
  constructor(private http: Http) { }

  mode = 'Observable';
  
  summonerMap: Map<string, ISummoner>;
 getSummoners(name: string): Observable<Map<string,ISummoner>> {
    
    return this.http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ name + '?api_key=' + this.myApiKey)
    .map(this.extractData).catch(this.handleError); 
   
  }

  private extractData(res: Response) {
      console.log('test3');
    this.summonerMap = res.json();
    return this.summonerMap || {};
    
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
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
