import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FbPostComponent } from './fb-post/fb-post.component';
import { IgPostComponent } from './ig-post/ig-post.component';

const appRoutes : Routes =[
  {
    path: 'fb-post',
    component: FbPostComponent,
    data : { title : 'FB POST'}
  },
  {
    path: 'ig-post',
    component: IgPostComponent,
    data : { title : 'IG POST'}
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FbPostComponent,
    IgPostComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
