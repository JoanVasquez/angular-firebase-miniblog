import { AuthService } from "./../../core/auth.service";
import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post } from "../post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  post: Post;

  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get("id");
    return this.postService.postData(id).subscribe(data => (this.post = data));
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get("id");
    this.postService.update(id, formData);
    this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get("id");
    this.postService.delete(id);
    this.router.navigate(['/blog']);
  }
}
