import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lyric-details-final',
  templateUrl: './lyric-details-final.component.html',
  styleUrls: ['./lyric-details-final.component.css']
})
export class LyricDetailsFinalComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id)
  }

}
