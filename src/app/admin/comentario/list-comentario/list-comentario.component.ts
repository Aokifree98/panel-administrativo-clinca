import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {
  comentarios: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private comentarioService: ComentarioService
  ) { }

  // tslint:disable-next-line: typedef
  atras() {
    this.router.navigate(
      [
        'admin',
        'comentarios',
        'listblog'
      ]
    );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.comentarioService.getComentariosbyBlog(params.id).subscribe(
      res => {
        this.comentarios = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar el Comentario');
    this.router.navigate(
      [
        'admin',
        'comentarios',
        'editar',
        codigoaeditar
      ]
    );
  }

}
