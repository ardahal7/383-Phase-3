import { MatchListService } from './match-list.service';
import { IMatchList } from './matchlist';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})

export class MatchListComponent {
    @Input()
    matchlist: IMatchList;
    errorMessage : string;
    test = 'hello';
    constructor(private matchService: MatchListService ,public match: IMatchList) { }
    getMatch(): void {
     this.matchService.getMatches()
                     .subscribe(
                       res =>{
                        this.matchlist=res;
                        console.log(this.matchlist[0].champion);
                        error => this.errorMessage = <any>error;
                        })
                  
  }

  viewDetails(): void{
      this.getMatch();
     //console.log(this.details.matchType);
  }
    
}
