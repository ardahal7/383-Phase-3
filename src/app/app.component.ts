import { matchDetail } from './match/matchDetail';
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
  providers: [SummonerService, MatchService]

})
export class AppComponent implements OnInit {
  
  errorMessage : string;
  name: string;
  constructor(private summonerService: SummonerService, private MLService: MatchService, /*private MDetService: matchDetailService*/) { }
  public  selectedSummoner: ISummoner;
  public mysummoner: ISummoner;
  summonerMap: Map<string, ISummoner>;
  mymatchlist: IMatchList;
  match: IMatchList[];
  detailsMap: Map<string, matchDetail>;
  public details: matchDetail;
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
                    
                    console.log(this.mySummonerID);
                    this.getMatches(this.mysummoner.id);
                    
                  }
                  
                )
  }
  getMatches(id: number): void {
     this.MLService.getMatches()
                .subscribe(
                  Response =>{
                    this.mymatchlist=Response;
                                       
                  }
                )
  }
  
  printMatchID(): void{
    console.log("this is mapid. " + this.details.mapId);
  }
 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }

 findSummoner(summonerId: number){
    for(this.i=0; this.i<10; this.i++){
        if(summonerId == this.details['participantIdentities'][this.i]['player'].summonerId){
            console.log(this.details['participantIdentities'][this.i]['player'].summonerId);
            console.log(this.details['participants'][this.i]['stats'].kills);
        }
    }
 }
}
