import { ToastrService } from 'ngx-toastr';
import { Coment } from 'src/app/models/coment';
import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-update-comentario',
  templateUrl: './update-comentario.component.html',
  styleUrls: ['./update-comentario.component.css']
})
export class UpdateComentarioComponent implements OnInit {
  comentario: Coment = {
    id: 0,
    Comment: '',
    BlogId: 0,
    ClienteId: 0
  };
  comentcliente: Comentario = {
    id: 0,
    Comment: '',
    BlogId: 0,
    ClienteId: 0,
    blog: {
      id: 0,
      Title: ''
    },
    cliente: {
      id: 0,
      Name: '',
      LastName: '',
      Photo: ''
    }
  }
  ladata: any = this.comentcliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private comentarioService: ComentarioService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.comentarioService.getComentario(params.id).subscribe(
        res => {
          console.log(res);
          this.comentario = res;
          this.ladata = res;
        },
        err => console.log(err)
      );
    }
  }

  updateComentario() {
    const params = this.activatedRoute.snapshot.params;
    this.comentarioService.updateComentario(params.id, this.comentario).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'comentario',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del comentario');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }

}
