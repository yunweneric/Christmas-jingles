import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service';
import {DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: any;
  num1 = 1;
  constructor(private video: YoutubeapiService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.video.getlatestVideos('christmas songs').subscribe(
      (data) => {
        this.collection = data;
        this.num1 = Math.ceil(Math.random() * 100);
        console.log(this.num1);
        this.collection = this.collection[this.num1]

        // console.log(this.collection[this.num1]);
        // console.log(this.collection[0]);
        
        // this.url1 = "https://www.youtube.com/embed"
      }
    );
    
    
  }
  
  getembedUrl(item: string){
    let data = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item +"?rel=1&showinfo=0&autohide=1&controls=1&autoplay=1&loop=0")
    // console.log(data);

    return data
    
  }
}
