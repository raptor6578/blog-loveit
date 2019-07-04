import { Component } from '@angular/core';
import {IPost} from './types/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts: IPost[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
