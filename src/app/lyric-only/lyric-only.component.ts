import { Component, OnInit } from '@angular/core';
import { LyricServiceService } from '../lyric-service.service'

@Component({
  selector: 'app-lyric-only',
  templateUrl: './lyric-only.component.html',
  styleUrls: ['./lyric-only.component.css']
})
export class LyricOnlyComponent implements OnInit {
  collection: any
  // item: string

  constructor(private lyric: LyricServiceService) { }

  ngOnInit(): void {
    this.lyric.getdata().subscribe(data => {
      this.collection = data;
      console.log(this.collection)
    })

  }
  // getdatafull(item){
  //   console.log(item)
  // }

}
