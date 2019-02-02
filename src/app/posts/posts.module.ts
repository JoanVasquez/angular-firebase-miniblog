import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { PostDashboadComponent } from "./post-dashboad/post-dashboad.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";
import { SharedModule } from "../shared/shared.module";
import { PostService } from './post.service';

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboadComponent }
];

@NgModule({
  declarations: [PostDashboadComponent, PostDetailComponent, PostListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [PostService]
})
export class PostsModule {}
