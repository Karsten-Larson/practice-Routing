import { Component, inject, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  //Option - 1 (pre-Angular 19): inject the ActivatedRouted service that
  // would allow you to access the activated route so, we can access the
  //parameters that are passed along with route like post/1 or post/2
  // private route: ActivatedRoute = inject(ActivatedRoute);
  //Option -2: Using the input signal created using input() function
  // to directly access the route parameters.
  //To enable this in the app.config.ts file, enable withComponentInputBinding() feature
  //when configuring the router.
  //Other important thing is the name of the input() should match the name of the parameter
  //if parameter is called fname,then input() signal should be named fname().
  //The parameter we are trying to access is id, so the input() below is called id.
  // In TypeScript and Angular, the non-null assertion operator (!) tells the compiler
  // that a variable will be initialized and will never be null or undefined. This is
  // useful when defining class properties that will be assigned later (e.g., in ngOnInit)
  // but TypeScript requires initialization.
  // this.route.snapshot - snapshot represents a static snapshot of the route at the moment the component was initialized.
  // this.route.snapshot.paramMap - paramMap is an object containing all route parameters (e.g., { id: '2' } if the URL is /posts/2).
  // this.route.snapshot.paramMap.get('id') - get('id') retrieves the string value of the id parameter from the URL.
  // Example: If the route is /posts/2, then get('id') returns '2' (a string).
  // Number(...) - Converts the string '2' into a number 2.
  // This ensures the id is treated as a number in further operations.
  //accessing the id parameter value using activated route
  // const id = Number(this.route.snapshot.paramMap.get('id'))
  @Input() id!: number;

  // dataService = inject(DataService);

  // post: Post | undefined = undefined;

  // ngOnInit(): void {
  //   this.post = this.dataService.getPostById(this.id);
  // }
}
