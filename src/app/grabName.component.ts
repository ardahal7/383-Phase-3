import { Component } from '@angular/core';
import { Summoner } from './summoner/summoner';
import { SummonerService } from './summoner/summoner.service';
import {AppComponent} from './app.component';
import { ISummoner } from './summoner/summoner';

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
  
constructor(private summonerservice: SummonerService, private appComp: AppComponent) { }
  model = new Summoner('');
  

  onSubmit() { this.submitted = true; }

  searchSummoner(name: string): void
  {
    console.log('grab test1');//Calling the getSummoners method of the App Component which receives the response from the observable of getSummoners in Summoner.Service
    console.log("grab test 2");
    this.appComp.getSummoners(name);
    
  }
    submitted = false;

}
