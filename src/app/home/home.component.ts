import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service';
import { SearchInterface } from '../search-interface';
import {DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: any;
  constructor(private video: YoutubeapiService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.video.getlatestVideos('silent night').subscribe(
      (data) => {
        this.collection = data;
        console.log(this.collection);
        // this.url1 = "https://www.youtube.com/embed"
      }
    );
  }
  getembedUrl(item: string){
    let data = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item +"?rel=1&showinfo=0&autohide=1&controls=1&autoplay=1&loop=0")
    console.log(data);

    return data
    
  }
}
