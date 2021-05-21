import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlankModule } from './plank/plank.module';
import { MainNavComponent } from './main-nav/main-nav.component';

import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule} from '@angular/youtube-player';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HttpClientModule, UserModule, AppRoutingModule, YouTubePlayerModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
