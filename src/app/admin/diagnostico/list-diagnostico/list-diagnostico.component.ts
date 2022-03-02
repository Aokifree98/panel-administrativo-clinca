import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-list-diagnostico',
  templateUrl: './list-diagnostico.component.html',
  styleUrls: ['./list-diagnostico.component.css']
})
export class ListDiagnosticoComponent implements OnInit {
  diagnosticos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private diagnosticoService: DiagnosticoService
  ) { }

  ngOnInit(): void {
    this.getdiagnosticos();
  }

  // tslint:disable-next-line: typedef
  getdiagnosticos() {
    this.diagnosticoService.getDiagnosticos().subscribe(
      res => {
        this.diagnosticos = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'diagnostico',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar diagnostico');
    this.router.navigate(
      [
        'admin',
        'diagnostico',
        'update',
        codigoaeditar
      ]
    );
  }
}
