import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories.component';
import { ReadComponent } from './components/read/read.component';
import { ResultsComponent } from './components/results/results.component';
import { StoryPagesComponent } from './components/story-pages/story-pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: StoriesComponent },
  { path: 'library', component: HomeComponent },
  { path: ':id/:id/preview/:id', component: ReadComponent },
  { path: ':id/:id/chapter/:id', component: StoryPagesComponent },
  { path: ':id/:id/read/:id', component: StoryPagesComponent },
  { path: 'related/:id/:id', component: ResultsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
