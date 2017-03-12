import { Component } from '@angular/core';
import { Summoner } from './summoner';
import { SummonerService } from './summoner.service';
import {AppComponent} from './app.component';
import { ISummoner } from './summoner';

@Component({
  // moduleId: module.id,
  selector: 'grabName',
  templateUrl: './grabName.component.html',
  providers: [SummonerService]
})
export class GrabNameComponent {
 name: string;
 errorMessage: string;
 summonerArray: ISummoner;
  
constructor(private summonerservice: SummonerService, private appcomponent: AppComponent) { }
  model = new Summoner('kirby25');
  

  onSubmit() { this.submitted = true; }

  setSummonerName(name: string): void
  {
    //Calling the getSummoners method of the App Component which receives the response from the observable of getSummoners in Summoner.Service
    this.appcomponent.getSummoners(name);
  }
    submitted = false;

}
