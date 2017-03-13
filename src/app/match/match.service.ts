import { IMatchList } from './match';
import { Injectable } from '@angular/core';
import { ISummoner } from '../summoner/summoner';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Request, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {
    private matchListUrl = 'https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/33989732?beginIndex=0&endIndex=10&api_key=RGAPI-5b3804ed-eb7e-4f75-8e69-cee241d9b62b'
    mode = 'Observable';
    constructor(private http: Http) { }
    matchlist: IMatchList;

    getMatches(): Observable<IMatchList> {
        return  this.http.get(this.matchListUrl).map(this.extractData).catch(this.handleError); 
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.matches || {};     
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
