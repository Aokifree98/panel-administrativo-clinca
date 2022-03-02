import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-servicio',
  templateUrl: './list-servicio.component.html',
  styleUrls: ['./list-servicio.component.css']
})
export class ListServicioComponent implements OnInit {
  servicios: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.getservicios();
  }
  getservicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servicios = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'servicio',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar servicio');
    this.router.navigate(
      [
        'admin',
        'servicio',
        'update',
        codigoaeditar
      ]
    );
  }
}
