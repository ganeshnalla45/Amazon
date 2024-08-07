import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonComponent } from './amazon/amazon.component';
import { SubnavComponent } from './subnav/subnav.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { LongbarComponent } from './longbar/longbar.component';
import { Longbar2Component } from './longbar2/longbar2.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
    SubnavComponent,
    BannerComponent,
    CardsComponent,
    LongbarComponent,
    Longbar2Component,
    SigninComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
