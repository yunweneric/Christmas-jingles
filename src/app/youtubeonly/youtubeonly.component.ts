import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service';
import { SearchInterface } from '../search-interface';

@Component({
  selector: 'app-youtubeonly',
  templateUrl: './youtubeonly.component.html',
  styleUrls: ['./youtubeonly.component.css'],
})
export class YoutubeonlyComponent implements OnInit {
  collection: any;
  videos: any;
  url1: any
  url2: any

  constructor(private video: YoutubeapiService) {}

  ngOnInit(): void {
    this.video.getVideos('christmas songs').subscribe(
      // lista => {
      //   for (let element of lista["items"]) {
      //   this.videos.push(element)
      //   }

      (data) => {
        // for (let element of data) {
        //   this.videos.push(element);
        //   this.collection = data;
        //   console.log(this.videos)
        // }
        this.collection = data;
        console.log(this.collection.items);
        // console.log(this.videos);
        this.url1 = "https://www.youtube.com/embed"

      }
    );
  }
}
