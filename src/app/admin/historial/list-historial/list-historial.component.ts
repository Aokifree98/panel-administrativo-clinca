// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
// import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.css']
})
export class ListHistorialComponent implements OnInit {
  // historiales: any = [];
  constructor(
    // private router: Router,
    // private toastr: ToastrService,
    // private historialService: HistorialService
  ) { }

  ngOnInit(): void {
    // this.gethistorials();
  }

  // // tslint:disable-next-line: typedef
  // gethistorials() {
  //   this.historialService.getHistorials().subscribe(
  //     res => {
  //       this.historiales = res;
  //     },
  //     err => console.error(err)
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // crear() {
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'historial',
  //       'create'
  //     ]
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // editar(codigo) {
  //   console.log(codigo);
  //   const codigoaeditar = codigo;
  //   this.toastr.info('Editar historial');
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'historial',
  //       'update',
  //       codigoaeditar
  //     ]
  //   );
  // }
}
