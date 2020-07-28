import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  postData = "";
  postName ="";
  
  @Output() childEvent = new EventEmitter();


  constructor(private postService : PostService) { }
  
  onAddPost(formId: NgForm){
    console.log(formId)
    if (formId.form.invalid) {
      return;
    }
    const post = {
      title : formId.value.postName,
      content : formId.value.postData
    }
    this.childEvent.emit(post)
  }
  
  ngOnInit() {
  }

}
