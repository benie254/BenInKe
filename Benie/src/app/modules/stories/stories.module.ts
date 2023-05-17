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
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { StoryFooterComponent } from './story-footer/story-footer.component';
import { DateAgoPipe } from './pipes/date/date-ago.pipe';
import { TruncatePipe } from './pipes/trunc/truncate.pipe';


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
    StoryPagesComponent,
    HomeComponent,
    NavComponent,
    StoryFooterComponent,
    DateAgoPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
