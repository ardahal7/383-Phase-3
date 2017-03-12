import { MatchListComponent } from './match-list/match-list.component';
import { IMatchList } from './match-list/matchlist';
import { MatchListService } from './match-list/match-list.service';
import { Component, OnInit } from '@angular/core';
import { ISummoner } from './summoner/summoner';
import { SummonerService } from './summoner/summoner.service';
import { Observable } from 'rxjs/Observable';
import {matchDetailService} from './match-detail.service';
import {matchDetail} from './matchDetail';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SummonerService, matchDetailService, MatchListService]

})
export class AppComponent implements OnInit {
  
  errorMessage : string;
  name: string;
  constructor(private summonerService: SummonerService, private MLService: MatchListService) { }
  public  selectedSummoner: ISummoner;
  public summonerArray: ISummoner;
  summonerMap: Map<string, ISummoner>;
  matchlist: IMatchList;
  title= 'Summoners Details';
  ngOnInit(): void {
    
  }
  
  getSummoners(name: string): void {
     this.summonerService.getSummoners(name)
                .subscribe(
                  Response =>{
                    this.summonerMap = Response;
                    console.log('test5');
                    console.log(this.summonerMap.get(`'`+name+`'`).id);
                  }
                  
                )
  }
  getMatches(): void {
     this.MLService.getMatches()
                .subscribe(
                  Response =>{
                    this.matchlist=Response;
                    console.log(Response[0]);
                    return this.matchlist[0];
                  }
                )
  }
 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }
}
