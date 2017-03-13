
import { MatchComponent } from './match/match.component';
import { IMatchList } from './match/match';
import { MatchService } from './match/match.service';
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
  providers: [SummonerService, matchDetailService, MatchService]

})
export class AppComponent implements OnInit {
  
  errorMessage : string;
  name: string;
  constructor(private summonerService: SummonerService, private MLService: MatchService) { }
  public  selectedSummoner: ISummoner;
  public mysummoner: ISummoner;
  summonerMap: Map<string, ISummoner>;
  mymatchlist: IMatchList;
  match: IMatchList[];
  title= 'Summoners Details';
  ngOnInit(): void {
    
  }
  
  getSummoners(name: string): void {
     this.summonerService.getSummoners(name)
                .subscribe(
                  Response =>{
                    this.summonerMap = Response;
                    this.mysummoner = this.summonerMap[name];
                    this.getMatches(this.mysummoner.id);
                    //console.log('test5');
                    // console.log(this.summonerMap[name].name);
                    //console.log(this.mysummoner.summonerLevel);
                  }
                  
                )
  }
  getMatches(id: number): void {
     this.MLService.getMatches()
                .subscribe(
                  Response =>{
                    this.mymatchlist=Response;
                    console.log(Response);
                    console.log('test');
                    //return this.matchlist[0];
                  }
                )
  }
 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }
}
