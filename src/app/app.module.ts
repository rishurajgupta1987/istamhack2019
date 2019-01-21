import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { CurrentdataComponent } from './currentdata/currentdata.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SharedComponent,
    HeaderComponent,
    StocksComponent,
    CryptocurrencyComponent,
    CurrentdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
