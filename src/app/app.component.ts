import { matchDetailService } from './matchdetail/matchdetail.service';
import { matchDetail } from './matchdetail/matchDetail';
import { MatchComponent } from './match/match.component';
import { IMatchList } from './match/match';
import { MatchService } from './match/match.service';
import { Component, OnInit } from '@angular/core';
import { ISummoner } from './summoner/summoner';
import { SummonerService } from './summoner/summoner.service';
import { Observable } from 'rxjs/Observable';
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
  constructor(private summonerService: SummonerService, private MLService: MatchService, private MDetService: matchDetailService) { }
  public  selectedSummoner: ISummoner;
  public mysummoner: ISummoner;
  summonerMap: Map<string, ISummoner>;
  mymatchlist: IMatchList;
  match: IMatchList[];
  detailsMap: Map<string, matchDetail>;
  tmpMatchID: number;
  mySummonerID: number;
  title= 'Summoners Details';
  i : number;
  ngOnInit(): void {
    
  }
  
  getSummoners(name: string): void {
     this.summonerService.getSummoners(name)
                .subscribe(
                  Response =>{
                    this.summonerMap = Response;
                    this.mysummoner = this.summonerMap[name];
                    this.mySummonerID = this.mysummoner.id;
                    console.log('this is my summoner ID:')
                    console.log(this.mySummonerID);
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
                    this.tmpMatchID = this.mymatchlist[0].matchId;
                    this.getMatchDetails(this.tmpMatchID);
                    console.log(Response);
                    console.log('test');
                    //return this.matchlist[0];
                  }
                )
  }
  getMatchDetails(matchID: number): void {
     this.MDetService.getMatchDetails(matchID)
                     .subscribe(
                       res =>{
                        this.detailsMap=res;
                        //this.detailsMap.matchType = res.matchType;
                        ///console.log(this.detailsMap['participantIdentities'][0]['player']);
                        console.log(this.detailsMap)
                        this.findSummoner(this.mySummonerID);
                        error => this.errorMessage = <any>error;
                        })
                  
  }
 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }

 findSummoner(summonerId: number){
    for(this.i=0; this.i<10; this.i++){
        if(summonerId == this.detailsMap['participantIdentities'][this.i]['player'].summonerId){
            console.log(this.detailsMap['participantIdentities'][this.i]['player'].summonerId);
            console.log(this.detailsMap['participants'][this.i]['stats'].kills);
        }
    }
 }
}
