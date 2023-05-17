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
import { BottomSheetOverviewExampleSheet, FollowBottomSheet } from './components/read/read.component';
import { FollowAltBottomSheet, StoryDialog } from './components/story-pages/story-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxEditorModule } from 'ngx-editor';
import { ContactModule } from '../contact/contact.module';
import { FollowAlt2BottomSheet, ShareBottomSheet } from './components/feedback/feedback.component';
import { RepliesBottomSheet } from './components/comments/comments.component';
import { CustomFilterPipe } from './pipes/filter/custom-filter-pipe.pipe';

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
    TruncatePipe,
    BottomSheetOverviewExampleSheet,
    StoryDialog,
    FollowBottomSheet,
    FollowAltBottomSheet,
    FollowAlt2BottomSheet,
    ShareBottomSheet,
    RepliesBottomSheet,
    CustomFilterPipe,
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatStepperModule,
    MatListModule,
    MatBottomSheetModule,
    MatInputModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatExpansionModule,
    NgxEditorModule,
    MatListModule,
    ContactModule,
  ],
  exports: [
    TruncatePipe,
    DateAgoPipe,
    StoryFooterComponent,
  ],
})
export class StoriesModule { }
