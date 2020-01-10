import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'http://localhost:3000/api/v1/blogs';
  
  constructor(private _http:HttpClient) {
    console.log('blog http service constructor called');
  }

  private handleError(err:HttpErrorResponse){
    console.log("handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message)

  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all');
    console.log(myResponse);
    return myResponse;
    
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId);
    return myResponse;
  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create', blogData);
    return myResponse;

  }

  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete', blogId);
    return myResponse;
    
  }

  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/edit' + '/' + blogId, blogData);
    return myResponse;
  }
}
