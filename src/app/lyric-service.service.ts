import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LyricServiceService {
  url = 'https://raw.githubusercontent.com/yunweneric/Christmas-jingles/master/database.json';
    // url = 'https://type.fit/api/quotes';


  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get(this.url);
  }
  getcurrentlyric(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
}
