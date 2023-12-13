import { Component } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  loadedPosts = [];
  public title: string = "";
  public content: string = "";
  apiURL = "https://653b530d2e42fd0d54d4eae6.mockapi.io/post";
  constructor(private http: HttpClient) { }

  ngOnInit() { this.getImages(); }

  onCreatePost(postData: { title: string, content: string }) {

    console.log(postData);

    this.http
      .post(`${this.apiURL}`, postData).subscribe(responseData => { console.log(responseData) });
  }

  onFetchPosts() {
    this.http.get(`${this.apiURL}`).subscribe(data => console.log(data));
  }

  onClearPosts() {
    // Send Http request

  }
  getImages() {
    this.http.get("https://api.pexels.com/v1/search?query=people").subscribe((data) => {
      console.log(data);

    })
  }
}


