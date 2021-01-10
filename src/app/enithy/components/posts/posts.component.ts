import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : Post[] = [];
  // constructor(private dataService: DataService) { 
  //   this.dataService.getPosts().subscribe(value => {
  //     this.posts = value;
  //     console.log(this.posts);
  //   })
  // }
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts =  value.allPosts);
  }
}
