import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs;

    constructor(public blogHttpService:BlogHttpService) { 
    console.log('Home component constructor called');
  }

  ngOnInit() {
    console.log("home onInIt called")
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log(this.allBlogs);
    
  }

  ngOnDestroy() {
    console.log("home component destroyed")
  }

}
