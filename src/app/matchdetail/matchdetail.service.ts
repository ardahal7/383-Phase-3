import { apiKey } from './../api-key';
import { Injectable } from '@angular/core';
import { matchDetail } from './matchDetail';
import {SummonerService} from '../summoner/summoner.service';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class matchDetailService {
  public myApiKey = apiKey.key;
  mode = 'Observable';
  matchDetailMap: Map<string, matchDetail>
  constructor(private http: Http, public summonerservice: SummonerService) { }
  getMatchDetails(matchID: number): Observable<Map<string, matchDetail>> {
    return  this.http.get('https://na.api.pvp.net/api/lol/na/v2.2/match/'+matchID+'?api_key=' + this.myApiKey)
    .map(this.extractData).catch(this.handleError); 
   
  }

  private extractData(res: Response) {
    this.matchDetailMap = res.json();
    return this.matchDetailMap || {};  
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
