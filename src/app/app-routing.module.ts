import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricOnlyComponent } from './lyric-only/lyric-only.component';
import { YoutubeAndLyricComponent } from './youtube-and-lyric/youtube-and-lyric.component';
import { YoutubeonlyComponent } from './youtubeonly/youtubeonly.component';
import { PnfComponent } from './pnf/pnf.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'lyriconly', component: LyricOnlyComponent },
  { path: 'lyricandvideo', component: YoutubeAndLyricComponent },
  { path: 'videoonly', component: YoutubeonlyComponent },
  { path: "**", component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
