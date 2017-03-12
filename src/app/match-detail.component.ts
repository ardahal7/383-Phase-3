import { Component} from '@angular/core';
import { ISummoner } from './summoner/summoner';
import { SummonerService } from './summoner/summoner.service';
import { Observable } from 'rxjs/Observable';
import {matchDetailService} from './match-detail.service';
import {matchDetail} from './matchDetail';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SummonerService, matchDetailService,matchDetail]

})

export class MatchDetailComponent{
    errorMessage : string;
    details: matchDetail;
    constructor(private matchDetailService: matchDetailService, public matchdetail: matchDetail) { }
    getMatchDetails(): void {
     this.matchDetailService.getMatchDetails()
                     .subscribe(
                       res =>{
                        this.details=res;
                        this.details.matchType = res.matchType;
                        console.log(this.details);
                        error => this.errorMessage = <any>error;
                        })
                  
  }

  viewDetails(): void{
      this.getMatchDetails();
     //console.log(this.details.matchType);
  }
}