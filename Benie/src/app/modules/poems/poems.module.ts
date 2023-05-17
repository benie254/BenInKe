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
    SearchComponent
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule
  ]
})
export class PoemsModule { }
