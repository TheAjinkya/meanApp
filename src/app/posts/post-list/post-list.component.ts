import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

 @Input() recievedPosts : Array<Post>=[]

  
  ngOnInit() {
    console.log(this.recievedPosts)
  }

}
