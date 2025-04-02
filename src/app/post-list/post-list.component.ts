import { Component, inject, OnInit } from '@angular/core';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [PostDetailComponent, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  dataService = inject(DataService);

  posts: Post[] = [];

  ngOnInit() {
    this.posts = this.dataService.posts;
  }
}
