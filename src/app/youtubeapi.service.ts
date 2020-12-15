import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class YoutubeapiService {
  url = 'https://www.googleapis.com/youtube/v3/search?path=snippet&key=AIzaSyCpZ_WOL_e2ro5cl7uLMYLcY9K7q8NivxY&type=video&q=christmas%20carol&maxResults=100'

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.url)
  }
}
