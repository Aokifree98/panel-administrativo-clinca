import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso1de3',
  templateUrl: './subproceso1de3.component.html',
  styleUrls: ['./subproceso1de3.component.css']
})
export class Subproceso1de3Component implements OnInit {
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
    Condition: '',
    Code: ''
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
    Google: '0',
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
  hombre = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/man.png';
  mujer = 'https://fieldsports.herokuapp.com/stylesheets/usuarios/women.png';
  especialistanormal: any = [];
  especialistadescuento: any = [];
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
  cambiarimagen(valor) {
    if (valor === 'Masculino') {
    this.cliente.Photo = this.hombre;
    } else if (valor === 'Femenino') {
      this.cliente.Photo = this.mujer;
    }
  }
  // tslint:disable-next-line: typedef
  saveCliente() {
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
  ngOnInit(): void {
    this.getespecialistas();
  }
  // tslint:disable-next-line: typedef
  atencion(wasa) {
    const codigo = wasa;
    const parametro = this.codigocliente;
    // console.log(numerofecha);
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso2',
        codigo,
        parametro
      ]
    );
  }
}
