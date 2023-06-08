import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqHandlerService } from 'src/app/helpers/requests/req-handler.service';

const apiURL = 'https://ben-in-ke-backend-nvp1.vercel.app/api/';
const adminURL = 'https://ben-in-ke-backend-nvp1.vercel.app/api/admin/';
// const apiURL = 'http://127.0.0.1:8000/api/';
// const adminURL = 'http://127.0.0.1:8000/api/admin/'

@Injectable({
  providedIn: 'any'
})
export class StoryService {
  addSt = adminURL + 'stories/add';
  storyDet = apiURL + 'story/details/';
  updateSt = adminURL + 'story/update/';
  addTag = adminURL + 'tags/add';
  tagDet = adminURL + 'tag/details/';
  addChap = adminURL + 'chapters/add';
  chapDet = apiURL + 'chapter/details/';
  updateChap = adminURL + 'chapter/update/';
  reactDet = adminURL + 'reaction/details/';
  addFeed = apiURL + 'feedbacks/all';
  feedDet = adminURL + 'feedback/details/';
  addChapPage = adminURL + 'pages/add';
  allPages = adminURL + 'pages/all';
  updatePage = adminURL + 'page/update/';
  pageDet = apiURL + 'page/details/';
  notifDet = adminURL + 'notification/details/';
  notifs = apiURL + 'notifications/all';
  sub = apiURL + 'newsletter/subscribers';
  subDet = adminURL + 'subscriber/details/';
  contact = adminURL + 'contacts/all';
  addCont = apiURL + 'contacts/add';
  contactDet = adminURL + 'contact/details/';

  constructor(
    private handler: ReqHandlerService,
    private http: HttpClient,
  ) { }
  getAllContacts(): Observable<any>{
    return this.handler.handleGET<any>(this.contact);
  }
  addContact(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addCont, data);
  }
  getContactDetails(id: any): Observable<any>{
    return this.handler.handleGET<any>(this.contactDet + id);
  }
  deleteContact(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.contactDet + id);
  }
  addNotif(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.notifs, data);
  }
  addSub(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.sub, data);
  }
  addStory(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addSt, data);
  }
  editStory(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updateSt + id, data);
  }
  deleteStory(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.updateSt + id);
  }
  addTags(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addTag, data);
  }
  editTags(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.tagDet + id, data);
  }
  getTagDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.tagDet + id);
  }
  getSubscriberDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.subDet + id);
  }
  deleteSubscriber(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.subDet + id);
  }
  getNotificationDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.notifDet + id);
  }
  editNotification(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.notifDet + id, data);
  }
  deleteNotification(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.notifDet + id);
  }
  deleteTags(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.tagDet + id);
  }
  addChapter(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addChap, data);
  }
  editChapter(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updateChap + id, data);
  }
  deleteChapter(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.updateChap + id);
  }
  getAllPages(): Observable<any>{
    return this.handler.handleGET<any>(this.allPages);
  }
  addPage(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addChapPage, data);
  }
  editPage(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updatePage + id, data);
  }
  deletePage(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.updatePage + id);
  }
  getReactionDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.reactDet + id);
  }
  deleteReaction(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.reactDet + id);
  }
  addFeedback(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.addFeed, data);
  }
  getFeedDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.feedDet + id);
  }
  editFeedback(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.feedDet + id, data);
  }
  deleteFeedback(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.feedDet + id);
  }
  getPageDetails(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.pageDet + id);
  }
}
