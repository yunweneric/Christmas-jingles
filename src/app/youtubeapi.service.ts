import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {SearchInterface} from './search-interface'


@Injectable({
  providedIn: 'root'
})
export class YoutubeapiService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyDov_AhJmCFgGaeInPBrSBq4zjoUd_RmFM';
  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDov_AhJmCFgGaeInPBrSBq4zjoUd_RmFM&type=video&q=christmas%20carol&maxResults=10&videoduration=any'

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.url)
  }
  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
  getlatestVideos(query: string): Observable <any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=1`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
}
