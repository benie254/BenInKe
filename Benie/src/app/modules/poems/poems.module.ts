import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoemsRoutingModule } from './poems-routing.module';
import { PoemsComponent } from './poems.component';
import { AllPoemsComponent } from './components/all-poems/all-poems.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FollowComponent } from './components/follow/follow.component';
import { NavComponent } from './components/nav/nav.component';
import { PoemFooterComponent } from './components/poem-footer/poem-footer.component';
import { ReadComponent } from './components/read/read.component';
import { RecentComponent } from './components/recent/recent.component';
import { RelatedComponent } from './components/related/related.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomSheetOverviewExampleSheet, FollowerBottomSheet } from './components/read/read.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { StoriesModule } from '../stories/stories.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FeedbackBottomSheet, FollowBottomSheet } from './components/feedback/feedback.component';
import { RepliesBottomSheet } from './components/comments/comments.component';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { ContactModule } from '../contact/contact.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from './pipes/filter/custom-filter.pipe';

@NgModule({
  declarations: [
    PoemsComponent,
    AllPoemsComponent,
    CommentsComponent,
    FeedbackComponent,
    FollowComponent,
    NavComponent,
    PoemFooterComponent,
    ReadComponent,
    RecentComponent,
    RelatedComponent,
    ResultsComponent,
    SearchComponent,
    BottomSheetOverviewExampleSheet,
    FeedbackBottomSheet,
    FollowBottomSheet,
    FollowerBottomSheet,
    RepliesBottomSheet,
    CustomFilterPipe,
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatFormFieldModule,
    StoriesModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTreeModule,
    ContactModule,
    NgxPaginationModule,
  ]
})
export class PoemsModule { }
