import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-subproceso1de5',
  templateUrl: './subproceso1de5.component.html',
  styleUrls: ['./subproceso1de5.component.css']
})
export class Subproceso1de5Component implements OnInit {
  dato;
  codigocliente;
  respuesta = false;
  clientbooking: any = [];
  cliente: Cliente = {
    id: 0,
    Name: '',
    LastName: '',
    BirthDate: new Date(),
    Job: '',
    Direction: '',
    Phone: '',
    Gender: '',
    CivilStatus: '',
    DocumentNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Google: '0',
    Condition: '',
    Code: ''
  };
  sinrespuesta = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private clienteService: ClienteService,
  ) { }

  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      rescliente => {
        this.cliente = rescliente;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const codigo = this.codigocliente;
        this.reservaService.getClientBooking(codigo).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          resreservas => {
            if (resreservas) {
              this.clientbooking = resreservas;
              this.toastr.success('sus reservas :)');
              this.respuesta = true;
              console.log(resreservas);
            } else {
              this.toastr.info('no tiene reservas');
              this.sinrespuesta = true;
            }
          }
        );
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    this.clienteService.getClientedoc(this.dato).subscribe(
      rescliente => {
        this.cliente = rescliente;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        const codigo = this.codigocliente;
        this.reservaService.getClientBooking(codigo).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          resreservas => {
            if (resreservas !== []) {
              this.clientbooking = resreservas;
              this.toastr.success('sus reservas :)');
              this.respuesta = true;
              console.log(resreservas);
            } else {
              this.toastr.info('no tiene reservas');
              this.sinrespuesta = true;
            }
          }
        );
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }

  detalles(codigo) {
    console.log(codigo);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso5',
        'subproceso2',
        codigo
      ]
    );
  }
  ngOnInit(): void {
  }

}
