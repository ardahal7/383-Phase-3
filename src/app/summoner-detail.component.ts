import { Component, Input } from '@angular/core';

import { ISummoner } from './summoner';

@Component({
  selector: 'summoner-detail',
  templateUrl:"./summoner-detail.component.html" 
    
})

export class SummonerDetailComponent {
    @Input()
    summoner: ISummoner;
    
}