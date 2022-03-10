// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
// import { AntecedenteService } from 'src/app/services/antecedente.service';

@Component({
  selector: 'app-list-antecedente',
  templateUrl: './list-antecedente.component.html',
  styleUrls: ['./list-antecedente.component.css']
})
export class ListAntecedenteComponent implements OnInit {
  // antecedentes: any = [];
  constructor(
    // private router: Router,
    // private toastr: ToastrService,
    // private antecedenteService: AntecedenteService
  ) { }

  ngOnInit(): void {
    // this.getantecedentes();
  }

  // // tslint:disable-next-line: typedef
  // getantecedentes() {
  //   this.antecedenteService.getAntecedentes().subscribe(
  //     res => {
  //       this.antecedentes = res;
  //     },
  //     err => console.error(err)
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // crear() {
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'antecedente',
  //       'create'
  //     ]
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // editar(codigo) {
  //   console.log(codigo);
  //   const codigoaeditar = codigo;
  //   this.toastr.info('Editar antecedente');
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'antecedente',
  //       'update',
  //       codigoaeditar
  //     ]
  //   );
  // }
}
