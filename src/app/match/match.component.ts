import { Component, Input } from '@angular/core';
import { IMatchList } from './match';
import { matchDetailService } from './matchdetail.service';
import {matchDetail} from './matchDetail';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  providers:[matchDetailService]
})
export class MatchComponent{

    @Input()
    Amatchlist: IMatchList;
constructor(private MDetService: matchDetailService){}
details: matchDetail;
errorMessage: string;
getMatchDetails(matchID: number): void {
     this.MDetService.getMatchDetails(matchID)
                     .subscribe(
                       res =>{
                        this.details=res;
                        
                        console.log(this.details.matchDuration);
                        console.log(this.details);
                        
                        error => this.errorMessage = <any>error;
                      })
                                            
  }

     

}
