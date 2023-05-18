import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { MyStoryService } from 'src/app/services/story/my-story.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() latestNotifs: any;
  notifs: any;
  panelOpenState = false;
  today = new Date();
  authorImg = 'https://res.cloudinary.com/benie/image/upload/v1667972682/h02js8etvetdr5ctbmtf.jpg';

  constructor(
    private service: MyStoryService,
  ) { }

  ngOnInit(): void {
  }
}
