import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subject } from 'rxjs'
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http : HttpClient) { }
  private postsUpdated = new Subject<Post[]>();

  posts:Array<Post>=[]

  getPosts(){
      this.http.get("http://localhost:3000/api/posts").subscribe((res:{message:string, posts:[]})=>{
      // this.posts = res.posts
      console.log("res", res.posts)
      this.posts = res.posts;
      this.postsUpdated.next([...res.posts]);
    })
  }

  getUpdatePostListener(){
    return this.postsUpdated.asObservable();
  }

  addPosts(postData:Post){
    this.posts.push(postData)
    this.postsUpdated.next([...this.posts]);
  }
  
}
