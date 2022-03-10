// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
// import { Historial } from 'src/app/models/historial';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ListHistorial } from 'src/app/models/listhistorial';
// import { HistorialService } from 'src/app/services/historial.service';
// import { AntecedenteService } from 'src/app/services/antecedente.service';

@Component({
  selector: 'app-update-historial',
  templateUrl: './update-historial.component.html',
  styleUrls: ['./update-historial.component.css']
})
export class UpdateHistorialComponent implements OnInit {
  // historial: ListHistorial = {
  //   Condition: 'sin condicion',
  //   ClienteId: 0,
  //   AntecedenteId: 0,
  // };
  // historial1: ListHistorial = {
  //   id: 0,
  //   Condition: '',
  //   ClienteId: 0,
  //   AntecedenteId: 0,
  // };
  // historialdetail : Historial = {
  //   id: 0,
  //   Condition: '',
  //   ClienteId: 0,
  //   AntecedenteId: 0,
  //   cliente: {
  //     id: 0,
  //     Name: '',
  //     LastName: ''
  //   },
  //   antecedente: {
  //     id: 0,
  //     Name: '',
  //     TipoId: 0,
  //     tipo: {
  //       id: 0,
  //       Name: ''
  //     },
  //   },
  // }
  // ladata: any = this.historialdetail;
  // antecedentesfiltrado: any = [];
  // antecedentescliente: any = [];
  // historiales: any = [];
  // antecedentes:any = [];
  // filtrada: any = [];
  // codigoantecedente;
  // codigocliente;
  // resultado;
  // mensaje;
  constructor(
    // private router: Router,
    // private toastr: ToastrService,
    // private activatedRoute: ActivatedRoute,
    // private historialService: HistorialService,
    // private antecedenteService: AntecedenteService
  ) { }
  // getantecedentes() {
  //   this.antecedenteService.getAntecedentes().subscribe(
  //     res => {
  //       this.antecedentes = res;
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // onOptionsSelectedAntecedente(event) {
  //   const value = event.target.value;
  //   this.codigoantecedente = value;
  //   console.log(value);
  // }
  ngOnInit(): void {

  }
  //   this.getantecedentes();
  //   const params = this.activatedRoute.snapshot.params;
  //   this.codigocliente = params.id;
  //   //traemos los historiales de los clientes
  //   this.historialService.getHistorialCliente(this.codigocliente).subscribe(
  //     reslist => {
  //       this.antecedentescliente = reslist;
  //       //filtramos los antecedentes de los clientes
  //       const array1: any = this.antecedentes;
  //       const array2: any = this.antecedentescliente;
  //       const array3: any = [];
  //       for (const item1 of array2) {
  //         for (const item2 of array1) {
  //           const parametro1 = item1.AntecedenteId;
  //           const parametro2 = item2.id;
  //           if (parametro1 === parametro2) {
  //             array3.push(item2);
  //             this.filtrada = array3;
  //           }
  //         }
  //       }
  //       const array4 = this.filtrada;
  //       const respuesta = array1.filter(obj => !array4.includes(obj));
  //       this.antecedentesfiltrado = respuesta;
  //       this.toastr.success('Listando antecedentes del cliente');
  //     }, err => {
  //       this.toastr.error('no se pudo listar los antecedentes del cliente');
  //     }
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // createHistorial(codigo) {
  //   this.historial.AntecedenteId = codigo;
  //   this.historial.ClienteId = this.codigocliente;
  //   console.log(this.historial);
  //   this.historialService.saveHistorial(this.historial).subscribe(
  //     res => {
  //       this.historial1 = res;
  //       console.log(res);
  //       this.historialService.getHistorialCliente(this.codigocliente).subscribe(
  //         reslist => {
  //           this.antecedentescliente = reslist;
  //           this.toastr.success('Nuevo antecedente del cliente creado');
  //         }, err => {
  //           this.toastr.error('no se pudo crear nuevo antecedente del cliente');
  //         }
  //       );
  //     },
  //     err => {
  //       console.error(err);
  //       this.toastr.error('no se pudo crear un nuevo historial');
  //     }
  //   );
  // }
  // updateHistorial() {
  //   const params = this.activatedRoute.snapshot.params;
  //   this.historialService.updateHistorial(params.id, this.historial).subscribe(
  //     res => {
  //       console.log(res);
  //       this.mensaje = res;
  //       this.toastr.success('actualizando los datos del historial');
  //     },
  //     err => {
  //       console.error(err);
  //       this.toastr.error('no se pudo actualizar');
  //     }
  //   );
  // }
  // deleteHistorial(codigo) {
  //   console.log(codigo);
  //   const codigoaeliminar = codigo;
  //   this.historialService.deleteHistorial(codigoaeliminar).subscribe(
  //     res => {
  //       if (res) {
  //         this.resultado = res;
  //         this.historialService.getHistorialCliente(this.codigocliente).subscribe(
  //           reslist => {
  //             this.antecedentescliente = reslist;
  //             this.toastr.success('Antecedente del cliente eliminado');
  //           }, err => {
  //             this.toastr.error('no se pudo eliminar el antecedente del cliente');
  //           }
  //         );
  //       } else {
  //         this.toastr.error('no se pudo eliminar');
  //       }
  //     }
  //   );
  // }
  // finish() {
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'historial',
  //       'list'
  //     ]
  //   );
  // }
}
