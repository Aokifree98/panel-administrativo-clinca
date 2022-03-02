import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blogcomentario',
  templateUrl: './list-blogcomentario.component.html',
  styleUrls: ['./list-blogcomentario.component.css']
})
export class ListBlogcomentarioComponent implements OnInit {
  blogs: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }

  // tslint:disable-next-line: typedef
  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blogs = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  vizualizar(codigo) {
    console.log(codigo);
    const codigoaver = codigo;
    this.toastr.info('Ver los comentarios del blog');
    this.router.navigate(
      [
        'admin',
        'comentarios',
        'list',
        codigoaver
      ]
    );
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
