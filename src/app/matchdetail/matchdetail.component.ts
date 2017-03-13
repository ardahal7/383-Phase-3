import { matchDetailService } from './matchdetail.service';
import { matchDetail } from './matchDetail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matchdetail',
  templateUrl: './matchdetail.component.html',
  styleUrls: ['./matchdetail.component.css']
})
export class MatchdetailComponent {
    @Input()
    details: Map<string, matchDetail>;   

 /* viewDetails(): void{
      this.getMatchDetails();
     //console.log(this.details.matchType);
  }
  */
}
