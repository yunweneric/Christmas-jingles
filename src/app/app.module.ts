import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LyricOnlyComponent } from './lyric-only/lyric-only.component';
import { YoutubeAndLyricComponent } from './youtube-and-lyric/youtube-and-lyric.component';
import { YoutubeonlyComponent } from './youtubeonly/youtubeonly.component';
import { PnfComponent } from './pnf/pnf.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LyricOnlyComponent,
    YoutubeAndLyricComponent,
    YoutubeonlyComponent,
    PnfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
