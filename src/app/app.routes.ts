import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    title: 'Post List',
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
    title: 'Post Detail',
  },
];
