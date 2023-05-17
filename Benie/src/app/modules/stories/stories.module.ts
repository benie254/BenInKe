import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { AllStoriesComponent } from './components/all-stories/all-stories.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CompletedStoriesComponent } from './components/completed-stories/completed-stories.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { OngoingStoriesComponent } from './components/ongoing-stories/ongoing-stories.component';
import { ReadComponent } from './components/read/read.component';
import { ResultsComponent } from './components/results/results.component';
import { StoryPagesComponent } from './components/story-pages/story-pages.component';


@NgModule({
  declarations: [
    StoriesComponent,
    AllStoriesComponent,
    CommentsComponent,
    CompletedStoriesComponent,
    FeedbackComponent,
    NotificationsComponent,
    OngoingStoriesComponent,
    ReadComponent,
    ResultsComponent,
    StoryPagesComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
