import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PoliticaService } from 'src/app/services/politica.service';

@Component({
  selector: 'app-list-politica',
  templateUrl: './list-politica.component.html',
  styleUrls: ['./list-politica.component.css']
})
export class ListPoliticaComponent implements OnInit {
  politicas: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private politicaService: PoliticaService
  ) { }

  ngOnInit(): void {
    this.getPoliticas();
  }

  // tslint:disable-next-line: typedef
  getPoliticas() {
    this.politicaService.getPoliticas().subscribe(
      res => {
        this.politicas = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'politica',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Politica');
    this.router.navigate(
      [
        'admin',
        'politica',
        'update',
        codigoaeditar
      ]
    );
  }

}
