import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {LyricServiceService} from 'src/app/lyric-service.service'

@Component({
  selector: 'app-lyric-detail',
  templateUrl: './lyric-detail.component.html',
  styleUrls: ['./lyric-detail.component.css']
})
export class LyricDetailComponent implements OnInit {
  // @Input() data;
  collection: any;
  title: any;
  author: any

  constructor(private router:ActivatedRoute, private http: LyricServiceService ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.http.getcurrentlyric(this.router.snapshot.params.id).subscribe(data =>{
      this.collection = data
      this.title = this.collection.title
      this.author = this.collection.author
      console.log(this.collection.lyric);

      
    })
    
  } 

}
