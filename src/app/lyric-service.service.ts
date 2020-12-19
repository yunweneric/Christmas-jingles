import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LyricServiceService {
  url = 'http://localhost:3000/song1';
    // url = 'https://type.fit/api/quotes';


  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get(this.url);
  }
  getcurrentlyric(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
}
