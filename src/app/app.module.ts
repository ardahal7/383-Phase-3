import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SummonerDetailComponent } from './summoner-detail.component';
import { SummonerService }          from './summoner.service';



@NgModule({
  declarations: [
    AppComponent,
  SummonerDetailComponent,    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SummonerService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }