import { Component, OnInit } from '@angular/core';
import { ISummoner } from './summoner';
import { SummonerService } from './summoner.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SummonerService]
})
export class AppComponent implements OnInit {
  errorMessage : string;
  
  constructor(private summonerService: SummonerService) { }
 public  selectedSummoner: ISummoner;
 public summonerArray: ISummoner;
  title= 'Summoners Details';

  ngOnInit(): void {

    this.getSummoners();
    
  }

  getSummoners(): void {
     this.summonerService.getSummoners()
                     .subscribe(
                       res =>{
                        this.summonerArray=res;
                        console.log(res);

                        //JSON.parse((res['_body'])['champions']);
                        // this.selectedSummoner=res['_body'];
                        //   console.log(JSON.parse(res['_body'])['champions']);
                        //   console.log("summoner array");
                        //   console.log(this.summonerArray);
                        })
                      //  error =>  this.errorMessage = <any>error);
  }
  

  
 onSelect(summoner: ISummoner): void{
   this.selectedSummoner=summoner;
 }
}
