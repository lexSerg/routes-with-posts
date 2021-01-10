import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './enithy/components/home/home.component';
import { PostsComponent } from './enithy/components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SinglePostComponent } from './enithy/components/single-post/single-post.component';
import { FullSinglePostComponent } from './enithy/components/full-single-post/full-single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent,
    FullSinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
