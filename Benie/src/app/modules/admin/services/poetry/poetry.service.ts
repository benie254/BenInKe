import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poem } from 'src/app/classes/poem/poem';
import { ReqHandlerService } from 'src/app/helpers/requests/req-handler.service';

// const api = 'http://127.0.0.1:8000/api/admin/';
const api = 'https://ben-in-ke-backend-nvp1.vercel.app/api/admin/';

@Injectable({
  providedIn: 'any'
})
export class AdminPoetryService {
  addPoem = api + 'poems/add';
  updatePoem = api + 'poem/update/';

  constructor(
    private handler: ReqHandlerService,
    ) { }
    
  postPoem(data: any): Observable<Poem>{
    return this.handler.handlePOST<Poem>(this.addPoem, data);
  }
  editPoem(id: number, data: any): Observable<any>{
    return this.handler.handlePUT<any>(this.updatePoem + id, data);
  }
  deletePoem(id: number): Observable<Poem>{
    return this.handler.handleDEL<Poem>(this.updatePoem + id);
  }
}
