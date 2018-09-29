import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { FbService } from '../services/fb.service'

@Component({
  selector: 'app-fb-post',
  templateUrl: './fb-post.component.html',
  styleUrls: ['./fb-post.component.css']
})
export class FbPostComponent implements OnInit {
  public comments; 
  public winner;
  public submitted = true;


  constructor(private http: HttpClient, private router : Router, private _fb : FbService) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    this.GetCommentators(formValue.post_url,formValue.page_access_token)
    .then((data:any)=>{
      console.log(data);
      this.comments = data; 
      this.winner = this.GetWinner(this.comments);
      this.submitted = false;
      console.log(this.winner);
   })

  }

  GetCommentators(path,page_access_token){
    var pathArray = path.split('/');
    var post_id = pathArray[6];
    return new Promise(resolve=>{
      this._fb.getPostComments(post_id,page_access_token)
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

  GetWinner(comments){
    var i = 0;
    let people = []; 
    let winner; 
    comments.data.forEach(element => {
      people[i]= element.from.name
      i ++
    });
    winner = people[Math.floor(Math.random()*people.length)];
    return winner; 
   }
  
}
    


