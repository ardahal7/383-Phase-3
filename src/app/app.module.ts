import { MatchService } from './match/match.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GrabNameComponent } from './grabName.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonerService }  from './summoner/summoner.service';
import {matchDetailService} from './match/matchdetail.service';
import { AlertModule } from 'ng2-bootstrap';
import { MatchComponent } from './match/match.component';
import { MatchdetailComponent } from './match/matchdetail.component';

@NgModule({
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GrabNameComponent,
    SummonerComponent,
    MatchComponent,
    MatchdetailComponent
  ],
  providers: [SummonerService, matchDetailService, MatchService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
