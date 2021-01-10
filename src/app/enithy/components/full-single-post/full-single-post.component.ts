import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-full-single-post',
  templateUrl: './full-single-post.component.html',
  styleUrls: ['./full-single-post.component.css']
})
export class FullSinglePostComponent {
  post: Post;
  constructor(private activatedRoute : ActivatedRoute, private dataService : DataService) { 
    this.activatedRoute.params.subscribe(value => this.dataService.getSinglePost(value.id)
    .subscribe((value) => { 
      console.log(value);
      this.post = value;
    }))
    
  }

}
