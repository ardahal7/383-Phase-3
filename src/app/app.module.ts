import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GrabNameComponent } from './grabName.component';
import { SummonerDetailComponent } from './summoner-detail.component';
import { SummonerService }  from './summoner.service';
import {matchDetailService} from './match-detail.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GrabNameComponent,
    SummonerDetailComponent
    
  ],
  providers: [SummonerService, matchDetailService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
