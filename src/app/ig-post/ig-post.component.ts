import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { FbService } from '../services/fb.service'

@Component({
  selector: 'app-ig-post',
  templateUrl: './ig-post.component.html',
  styleUrls: ['./ig-post.component.css']
})
export class IgPostComponent implements OnInit {

  public ig_page_id;
  public comments; 
  public winner;
  public submitted = true;

  constructor(private http: HttpClient, private router : Router, private _fb : FbService) { }

  ngOnInit() {

  }

  onSubmit(formValue) {
    var pathArray = formValue.post_url.split('/');
    var short_code = pathArray[4];
    this.getIGpageid(formValue.page_access_token)
    .then((data:any)=>{
      this.ig_page_id = data.instagram_business_account.id; 
      console.log(this.ig_page_id);
      this.GetCommentators(formValue.page_access_token,this.ig_page_id)
      .then((data:any)=>{
        this.comments = data; 
        console.log(this.comments);
        this.winner = this.GetWinner(short_code, this.comments)
        this.submitted = false;
    })
   })
  }

  getIGpageid(page_access_token){
    return new Promise(resolve=>{
      this._fb.getIGpageid(page_access_token)
      .subscribe(
        result => {
          resolve(result)
        },
        error => {
          this.submitted = false;
          this.winner = null; 
        },
      ) 
       
      })
    }

    GetCommentators(page_access_token,ig_page_id){
      return new Promise(resolve=>{
        this._fb.getIGcomments(ig_page_id,page_access_token)
        .subscribe(
          result => {
            resolve(result)
          },
          error => {
            this.submitted = false;
            this.winner = null; 
          },
        )         
        })
      }

    GetWinner(short_code,comments){
      var i = 0;
      let people = []; 
      let winner; 
      console.log("waad");
      console.log(comments.media.data[0].shortcode);
      comments.media.data.every(function(element, index) {
        var stop = (element.shortcode == short_code);
        if (stop){
          element.comments.data.forEach(element => {
            people[i]= element.username 
            i ++
          });
        }       
        return(!stop) 
      })    
      winner = people[Math.floor(Math.random()*people.length)];
      console.log(winner);
      return winner; 
     }

}
