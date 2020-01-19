import { PostResponse } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postPages = 0;

  constructor(private http: HttpClient) { }

  getPosts(pull: boolean = false) {
    if (pull) {
      this.postPages = 0;
    }
    this.postPages++;
    return this.http.get<PostResponse>(`${URL}/post/?pagina=${this.postPages}`)
  }
}
