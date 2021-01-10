import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullSinglePostComponent } from './enithy/components/full-single-post/full-single-post.component';
import { PostsComponent } from './enithy/components/posts/posts.component';
import { DeactivatorService } from './enithy/services/deactivator.service';
import { PostCheckService } from './enithy/services/post-check.service';
import { PostResolveService } from './enithy/services/post-resolve.service';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, canDeactivate : [DeactivatorService], resolve : {allPosts : PostResolveService}},
  {path: 'posts/:id', component: FullSinglePostComponent, canActivate: [PostCheckService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
