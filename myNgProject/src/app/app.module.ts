import { BrowserModule,TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import {TransferHttpService} from "@gorniv/ngx-transfer-http";
import{CommonServiceService} from './common-service.service';
// import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [TransferHttpService,TransferState,CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
