import { Component, Input } from '@angular/core';

import { Summoner } from './summoner';

@Component({
  selector: 'summoner-detail',
  templateUrl:"./summoner-detail.component.html" 
    
})

export class SummonerDetailComponent {
    @Input()
    summoner: Summoner;
    
}