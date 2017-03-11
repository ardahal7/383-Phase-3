import { Component, OnInit } from '@angular/core';
import { ISummoner } from './summoner';
import { SummonerService } from './summoner.service';
import { Observable } from 'rxjs/Observable';
import {matchDetailService} from './match-detail.service';
import {matchDetail} from './matchDetail';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  template: '<grabName></grabName>',
  styleUrls: ['./app.component.css'],
  providers: [SummonerService, matchDetailService]

})
export class AppComponent implements OnInit {
  errorMessage : string;
  
  constructor(private summonerService: SummonerService, private matchDetailService: matchDetailService) { }
 public  selectedSummoner: ISummoner;
 public summonerArray: ISummoner;
 details: matchDetail;
  title= 'Summoners Details';
  ngOnInit(): void {

    this.getSummoners();
    this.getMatchDetails();
    
  }

  

  getSummoners(): void {
     this.summonerService.getSummoners()
                     .subscribe(
                       res =>{
                        this.summonerArray=res;
                        console.log(res);  
                        error =>  this.errorMessage = <any>error;              
                      })
                      
                     
  }
  getMatchDetails(): void {
     this.matchDetailService.getMatchDetails()
                     .subscribe(
                       res =>{
                        this.details=res;
                        console.log(res);
                        error => this.errorMessage = <any>error;
                        })
                  
  }

 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }
}
