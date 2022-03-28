import { ToastrService } from 'ngx-toastr';
import { Tipo } from 'src/app/models/tipo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoService } from 'src/app/services/tipo.service';
import { ListLaboratorio } from 'src/app/models/listlaboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-add-laboratorio',
  templateUrl: './add-laboratorio.component.html',
  styleUrls: ['./add-laboratorio.component.css']
})
export class AddLaboratorioComponent implements OnInit {
  tipo: Tipo = {
    id: 0,
    Name: ''
  };
  laboratorio: ListLaboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0,
    TipoId: 0
  };
  laboratorio1: ListLaboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0,
    TipoId: 0
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private activatedRoute: ActivatedRoute,
    private laboratorioService: LaboratorioService,
  ) { }
  saveLaboratorio() {
    delete this.laboratorio.id;
    console.log(this.laboratorio);
    this.laboratorioService.saveLaboratorio(this.laboratorio).subscribe(
      res => {
        this.laboratorio1 = res;
        console.log(res);
        this.toastr.success('Nuevo laboratorio creado');
        this.finish();
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo laboratorio');
      }
    );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.tipoService.getTipo(params.id).subscribe(
        res => {
          console.log(res);
          this.tipo = res;
          this.laboratorio.TipoId = this.tipo.id;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'laboratorio',
        'list'
      ]
    );
  }

}
