import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrManager } from 'ng6-toastr-notifications';

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

   constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService, public toastr: ToastrManager, private location: Location) { 
    console.log("view-blog constructor called")
  }

  ngOnInit() {
    console.log("view-blog ngOnInIt called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
          
                data =>{
                  console.log(data);
                  this.currentBlog = data["data"];
                  },
                  
                error =>{
                  console.log("some error occured");
                  console.log(error.errorMessage);

                })
    
    
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.successToastr('This blog is successfully deleted.', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['/home']);
        }, 1000)
        
      },
      error =>{
        console.log(error);
        console.log(error.errorMessage);
        this.toastr.errorToastr('Some Error Occured.', 'Oops!');
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy(){
    console.log("view-blog component destroyed");
  }

}