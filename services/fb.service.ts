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

 getPostComments(post_id) {
   return this.http.get('/api/comments/'+post_id);
 }

 /*saveMeteo(data) {
   return this.http.post('/meteo', data);
 }*/

}