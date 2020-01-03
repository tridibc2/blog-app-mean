import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Action", "Drama", "Technology","Cooking","Travel", "Erotic"];


  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    } //end blogData

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log(data);
        this.toastr.successToastr('Blog Posted Susseccfully!', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['blog',data.data.blogId]);
        }, 1000)

      },

      error => {
        console.log(error);
        console.log(error.errorMessage);
        this.toastr.errorToastr('This is not good!', 'Oops!');
      })
  }

}


