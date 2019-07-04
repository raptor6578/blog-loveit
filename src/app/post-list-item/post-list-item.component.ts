import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../types/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit() {
  }

  public loveIt() {
    this.post.loveIts++;
  }

  public dontLoveIt() {
    this.post.loveIts--;
  }

}
