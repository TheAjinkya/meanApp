import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  @Output() childEvent = new EventEmitter();

  constructor(private http : HttpClient) { }

  posts:Array<Post>=[]

  sharePost(posts){
    // this.childEvent.emit(posts)
    this.posts = posts.map(res=>res)
    console.log("posts array ", this.posts)
  }
}
