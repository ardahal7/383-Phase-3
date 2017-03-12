import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GrabNameComponent } from './grabName.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonerService }  from './summoner/summoner.service';
import {matchDetailService} from './match-detail.service';
import { AlertModule } from 'ng2-bootstrap';
import {MatchDetailComponent} from './match-detail.component';


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
    MatchDetailComponent
    
  ],
  providers: [SummonerService, matchDetailService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
