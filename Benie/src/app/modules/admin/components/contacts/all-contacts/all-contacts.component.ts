import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { StoryService } from '../../../services/story/story.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  myList: any;
  showData: boolean = false;
  hideContent: boolean= false;
  showEdit: boolean = false;
  myModel = 'Contact';
  selected: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private service: StoryService,
  ) { }

  ngOnInit(): void {
    // if(!this.auth.currentUserValue){
    //   this.auth.logout();
    //   this.router.navigate[('/auth')]
    // }else if(!this.auth.currentUserValue.is_staff || !this.auth.currentUserValue.is_superuser){
    //   this.auth.logout();
    //   this.router.navigate[('/auth')];
    //   Notiflix.Report.failure(
    //     'Not Permitted!',
    //     "Your log in was successful, but you don't have the permissions to access this page.",
    //     'Too Bad',
    //   )
    // }
    this.allRecords();
  }
  allRecords(){
    Notiflix.Loading.dots('Loading...');
    this.service.getAllContacts().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.myList = res;
        console.warn(res)
      },
      error: (err) => {
        Notiflix.Notify.failure('Error!');
        Notiflix.Loading.remove();
      }
    })
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }
  copy = (text: any): void => {
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
  }
}
