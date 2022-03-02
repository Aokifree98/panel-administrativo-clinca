import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogs: any = [] ;
  resultado;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }

  getBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        this.blogs = res;
      },
      err => console.error(err)
    );
  }
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
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'blog',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Blog');
    this.router.navigate(
      [
        'admin',
        'blog',
        'update',
        codigoaeditar
      ]
    );
  }
  // tslint:disable-next-line: typedef
  eliminar(codigo) {
    console.log(codigo);
    const codigoaeliminar = codigo;
    this.blogService.deleteBlog(codigoaeliminar).subscribe(
      res => {
        if (res) {
          this.resultado = res;
          this.router.navigate(
            [
              'admin',
              'blog',
              'list'
            ]
          );
          this.toastr.success('blog eliminado');
        } else {
          this.toastr.error('no se pudo eliminar');
        }
      }
    )
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
