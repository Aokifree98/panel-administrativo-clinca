import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-list-laboratorio',
  templateUrl: './list-laboratorio.component.html',
  styleUrls: ['./list-laboratorio.component.css']
})
export class ListLaboratorioComponent implements OnInit {
  laboratorios: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private laboratorioService: LaboratorioService
  ) { }

  ngOnInit(): void {
    this.getlaboratorios();
  }
  getlaboratorios() {
    this.laboratorioService.getLaboratorios().subscribe(
      res => {
        this.laboratorios = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'laboratorio',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar laboratorio');
    this.router.navigate(
      [
        'admin',
        'laboratorio',
        'update',
        codigoaeditar
      ]
    );
  }

}
