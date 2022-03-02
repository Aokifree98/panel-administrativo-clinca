import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NumeroService } from 'src/app/services/numero.service';

@Component({
  selector: 'app-list-numero',
  templateUrl: './list-numero.component.html',
  styleUrls: ['./list-numero.component.css']
})
export class ListNumeroComponent implements OnInit {
  numeros: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private numeroService: NumeroService
  ) { }

  ngOnInit(): void {
    this.getNumeros();
  }

  // tslint:disable-next-line: typedef
  getNumeros() {
    this.numeroService.getNumeros().subscribe(
      res => {
        this.numeros = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'numero',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Numero');
    this.router.navigate(
      [
        'admin',
        'numero',
        'update',
        codigoaeditar
      ]
    );
  }

}
