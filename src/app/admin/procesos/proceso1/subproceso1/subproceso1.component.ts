import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso1',
  templateUrl: './subproceso1.component.html',
  styleUrls: ['./subproceso1.component.css']
})
export class Subproceso1Component implements OnInit {
  especialistas: any = [];
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
    Condition: 'desactivado',
    Code: '99999999'
  };
  dato: '';
  cliente1: Cliente = {
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
    Google: '',
    Condition: '',
    Code: ''
  };
  botones = true;
  buscar = false;
  crear = false;
  datoscliente = false;
  codigocliente;
  genero: Genero [] = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  estadocivil: Genero [] = [
    {
      id: 1,
      name: 'Soltero'
    },
    {
      id: 2,
      name: 'Casado'
    },
    {
      id: 3,
      name: 'Divorciado'
    },
    {
      id: 4,
      name: 'Viudo'
    },
    {
      id: 5,
      name: 'Concubinato'
    },
    {
      id: 6,
      name: 'Separación en proceso'
    },
    {
      id: 7,
      name: 'Separado'
    }
  ];
  hombre = 'https://especialistasports.herokuapp.com/stylesheets/usuarios/man.png';
  mujer = 'https://especialistasports.herokuapp.com/stylesheets/usuarios/women.png';
  especialistanormal: any = [];
  especialistadescuento: any = [];
  normal = true;
  descuento = false;
  fecha: Date = new Date();
  fechaActual: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private especialistaService: EspecialistaService,
  ) { }
  // tslint:disable-next-line: typedef
  onOptionsSelected(event) {
    const value = event.target.value;
    this.cliente.Gender = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedStatus(event) {
    const value = event.target.value;
    this.cliente.CivilStatus = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  getespecialistas() {
    this.especialistaService.getEspecialistas().subscribe(
      res => {
        this.especialistas = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  buscarcliente() {
    this.buscar = true;
    this.botones = false;
  }
  // tslint:disable-next-line: typedef
  crearcliente() {
    this.crear = true;
    this.botones = false;
  }
  // tslint:disable-next-line: typedef
  saveCliente() {
    if (this.cliente.Gender === 'Masculino') {
      this.cliente.Photo = this.hombre;
    } else if (this.cliente.Gender === 'Femenino') {
      this.cliente.Photo = this.mujer;
    }
    delete this.cliente.id;
    this.cliente.Password = this.cliente.DocumentNumber;
    console.log(this.cliente);
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Nuevo cliente creado');
        this.datoscliente = true;
        this.crear = false;
      },
      err => {
        this.toastr.error('no se pudo crear un nuevo cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    this.clienteService.getClientedoc(this.dato).subscribe(
      res => {
        this.cliente1 = res;
        this.codigocliente = this.cliente1.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.datoscliente = true;
        this.buscar = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  reservar(wasa, fecha) {
    const codigo = wasa;
    const numerofecha = new Date(fecha).getTime();
    const parametro = this.codigocliente;
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso2',
        codigo,
        parametro,
        numerofecha
      ]
    );
  }
  // tslint:disable-next-line: typedef
  sumarDias(fecha, dia) {
    fecha.setDate(fecha.getDate() + dia);
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1; // As January is 0.
    const yyyy = fecha.getFullYear();
    let returnDate = '';
    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}`;
      } else {
      returnDate += `-${mm}`;
      }

    if (dd < 10) {
    returnDate += `-0${dd}`;
    } else {
    returnDate += `-${dd}`;
    }
    return returnDate;
  }
  // tslint:disable-next-line: typedef
  getNowDate() {
    const fecha = new Date();
    const today = new Date();
    // return returnDate;
    const d = new Date(today);
    // this.sumarDias(returnDate)
    return this.sumarDias(d, 1);
  }
  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    this.getespecialistas();
  }
}
