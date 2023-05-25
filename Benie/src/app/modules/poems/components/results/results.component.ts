import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { PoetryService } from '../../services/poetry.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  poemsByDate: any;
  poems: any;
  categ = '';
  nothingImg = 'https://res.cloudinary.com/benie/image/upload/v1669956626/undraw_questions_re_1fy7_w2hzi7.svg';
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [2, 5, 10, 15];
  dateInput: any;
  values = '';
  searched: any;
  categSearched: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private poetryService:PoetryService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.searched = (params['id']),
        this.searchByDate(params['id']),
        this.relatedPoems(params['id'])
      }
    )
    if(this.searched === 'Poems' || this.searched === 'Spoken-Word' || this.searched === 'One-Liners' || this.searched === 'Poetic-Chains' || this.searched === 'Poetic-Notes'){
      this.categSearched = true;
    }else{
      this.categSearched = false;
    }
    this.bg();
  }
  relatedPoems(id: string){
    Notiflix.Loading.pulse('R...');
    this.poetryService.getRelatedPoems(id).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.poems = res;
        this.categ = id;
        this.bg();
        this.onTableDataChange(this.page)
      }
    })
  }
  bg(){
    let s = (<HTMLDivElement>document.getElementById('sch'));
    s.style.color = 'white';
  }
  searchByDate(date: string){
    Notiflix.Loading.pulse('Retrieving...');
    this.poetryService.searchByDate(date).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.poemsByDate = res;
        this.onTableDataChange(this.page);
      },
    })
  }
  back(){
    history.back();
  }
  onKey(event: any){
    this.values = event.target.value;
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.relatedPoems(this.categ);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.relatedPoems(this.categ);
  }
}
