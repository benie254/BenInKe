import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemsComponent } from './poems.component';
import { AllPoemsComponent } from './components/all-poems/all-poems.component';
import { ReadComponent } from './components/read/read.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: PoemsComponent },
  { path: ':id/:id/read/:id', component: ReadComponent },
  { path: 'all', component: AllPoemsComponent },
  { path: 'related/category/:id', component: ResultsComponent },
  { path: 'related/date/:id', component: ResultsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoemsRoutingModule { }
