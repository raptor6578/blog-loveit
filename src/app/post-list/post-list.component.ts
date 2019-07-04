import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPost[];

  constructor() { }

  ngOnInit() {
  }

  public orderPosts(posts: IPost[]) {
    const sortPosts = (a: IPost, b: IPost) => {
      if (a.loveIts > b.loveIts) {
        return -1;
      } else {
        return 1;
      }
    };
    return posts.sort(sortPosts);
  }

}
