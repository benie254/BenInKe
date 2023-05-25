import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { MyStoryService } from 'src/app/services/story/my-story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notifs: any = 6;
  searchResults: any;
  searchText: any;
  title: any;
  latestNotifs: any;
  

  constructor(
    private service: MyStoryService,
  ) { }

  ngOnInit(): void {
    this.allStories();
    this.getNotifications();
  }
  allStories(){
    Notiflix.Loading.pulse('Retrieving...')
    this.service.getAllStories().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.searchResults = res;
      }
    })
  }
  titleValue = (text: any): void => {
    this.title = text;
  }
  getNotifications(){
    Notiflix.Loading.pulse('fetching...')
    this.service.getAllNotifications().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.notifs = res;
        this.latestNotifs = this.notifs.slice(0,2);
        this.checkViews();
      }
    })
  }
  checkViews(){
    let hasVisited = sessionStorage.getItem('washere');
    if ( ! hasVisited ) {
    sessionStorage.setItem('washere', true.toString());
    } else {
      this.latestNotifs = '';
      sessionStorage.removeItem('washere')
    }
  }

}
