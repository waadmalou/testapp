import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class FbService {

 constructor(private http:HttpClient) { }

 /*getMeteos() {
   return this.http.get('/meteo');
 }*/

 getPostComments(post_id,page_access_token) {
   return this.http.get('/api/fb/comments/'+post_id+'/'+page_access_token);
 }

 getIGpageid(page_access_token) {
  return this.http.get('/api/ig/ig_page_id/'+page_access_token);
}

getIGcomments(ig_page_id,page_access_token) {
  return this.http.get('/api/ig/comments/'+ig_page_id+'/'+page_access_token);
}
 /*saveMeteo(data) {
   return this.http.post('/meteo', data);
 }*/

}
