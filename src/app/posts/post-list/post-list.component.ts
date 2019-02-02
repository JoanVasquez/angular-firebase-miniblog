import { AuthService } from './../../core/auth.service';
import { PostService } from "./../post.service";
import { Post } from "./../post";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService, private auth: AuthService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
  }

  delete(id: string) {
    this.postService.delete(id);
  }
}
