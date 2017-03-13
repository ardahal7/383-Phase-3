import { Component, Input } from '@angular/core';
import { ISummoner } from './summoner'; 
import { Summoner } from './summoner';
@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent {
    @Input()
    summoner: Map<string, ISummoner>;
}
