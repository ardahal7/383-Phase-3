import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummonerDetailComponent } from './summoner-detail.component';
import { SummonerService }  from './summoner.service';
import {matchDetailService} from './match-detail.service';



@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SummonerService, matchDetailService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
