import { Component, OnInit } from '@angular/core';
import { YoutubeapiService } from '../youtubeapi.service'

@Component({
  selector: 'app-youtubeonly',
  templateUrl: './youtubeonly.component.html',
  styleUrls: ['./youtubeonly.component.css']
})
export class YoutubeonlyComponent implements OnInit {
  collection: any

  constructor(private video: YoutubeapiService) { }

  ngOnInit(): void {
    this.video.getdata().subscribe(data => {
      this.collection = data
      console.log(data);


    })
  }

}
