import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  private postSub = new Subscription();

  constructor(private postService : PostService) { }

  recievedPosts : Array<Post> = []
  
  ngOnInit() {
    this.postService.getPosts()
    this.postSub = this.postService.getUpdatePostListener().subscribe((res: Array<Post>)=>{
      this.recievedPosts = res;
    })
    console.log("this.recievedPosts", this.recievedPosts)
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
