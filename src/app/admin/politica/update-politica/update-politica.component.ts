import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Politica } from 'src/app/models/politica';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliticaService } from 'src/app/services/politica.service';

@Component({
  selector: 'app-update-politica',
  templateUrl: './update-politica.component.html',
  styleUrls: ['./update-politica.component.css']
})
export class UpdatePoliticaComponent implements OnInit {
  politica: Politica = {
    id: 0,
    Name: '',
    Detail: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private politicaService: PoliticaService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.politicaService.getPolitica(params.id).subscribe(
        res => {
          console.log(res);
          this.politica = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updatePolitica() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.politica);
    // llamando a servicio de creacion que esta enlazada con el api
    this.politicaService.updatePolitica(params.id, this.politica).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'politica',
            'list'
          ]
        );
        this.toastr.success('Nuevo politica creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo politica');
      }
    );
  }
}
