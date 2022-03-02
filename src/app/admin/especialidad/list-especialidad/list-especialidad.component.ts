import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-list-especialidad',
  templateUrl: './list-especialidad.component.html',
  styleUrls: ['./list-especialidad.component.css']
})
export class ListEspecialidadComponent implements OnInit {
  especialidades: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private especialidadService: EspecialidadService
  ) { }

  ngOnInit(): void {
    this.getespecialidads();
  }
  getespecialidads() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidades = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'especialidad',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar especialidad');
    this.router.navigate(
      [
        'admin',
        'especialidad',
        'update',
        codigoaeditar
      ]
    );
  }

}
