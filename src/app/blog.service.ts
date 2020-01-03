import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public currentBlog;

  public allBlogs = [{
    
    "blogId": "ycnqWhFtT",
    "lastModified": "2019-05-08T15:37:30.250Z",
    "created": "2019-05-08T15:37:30.250Z",
    "tags": [],
    "author": "Hacker",
    "category": "example",
    "isPublished": true,
    "views": 2,
    "bodyHtml": "<h1>Hello Everyone</h1>",
    "description": "this is descriotion",
    "title": "Example Blog 4"
},
{

  "blogId": "wvO8LaztO",
  "lastModified": "2019-05-09T06:38:02.220Z",
  "created": "2019-05-09T06:38:02.220Z",
  "tags": [],
  "author": "Akash  Keshari",
  "category": "Technology",
  "isPublished": true,
  "views": 0,
  "bodyHtml": "C",
  "description": "kak",
  "title": "Custom Title"
},
{
  "blogId": "cSm_yLgS3",
  "lastModified": "2019-05-09T10:13:16.063Z",
  "created": "2019-05-09T10:13:16.063Z",
  "tags": [],
  "author": "varun verma",
  "category": "Action",
  "isPublished": true,
  "views": 0,
  "bodyHtml": "don't delete blogs",
  "description": "don't delete blogs, if deleted add more",
  "title": "don't delete blogs"
}]

  constructor() { 
    console.log('Service Constructor is called')
  }

  public getAllBlogs() {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}
