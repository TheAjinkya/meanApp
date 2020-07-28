import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanApp';

  @Input() posts:Array<{title:string, content: string}> = []

  getCreatedPost(e: {title:string, content: string}){
    this.posts.push(e)
    console.log("Posts Array", this.posts);
  }
}
