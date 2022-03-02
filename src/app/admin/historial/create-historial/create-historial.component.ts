import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ListHistorial } from 'src/app/models/listhistorial';
import { ClienteService } from 'src/app/services/cliente.service';
import { HistorialService } from 'src/app/services/historial.service';
import { AntecedenteService } from 'src/app/services/antecedente.service';

@Component({
  selector: 'app-create-historial',
  templateUrl: './create-historial.component.html',
  styleUrls: ['./create-historial.component.css']
})
export class CreateHistorialComponent implements OnInit {
  dato: '';
  antecedentes: any = [];
  antecedentescliente: any = [];
  historial: ListHistorial = {
    Condition: 'sin condicion',
    ClienteId: 0,
    AntecedenteId: 0,
  };
  historial1: ListHistorial = {
    id: 0,
    Condition: '',
    ClienteId: 0,
    AntecedenteId: 0,
  };
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
  codigoantecedente;
  codigocliente;
  resultado;
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private historialService: HistorialService,
    private antecedenteService: AntecedenteService

  ) { }
  getantecedentes() {
    this.antecedenteService.getAntecedentes().subscribe(
      res => {
        this.antecedentes = res;
      },
      err => console.error(err)
    );
  }
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
  onOptionsSelectedAntecedente(event) {
    const value = event.target.value;
    this.codigoantecedente = value;
    console.log(value);
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
    this.cliente.Password = this.cliente.DocumentNumber;
    delete this.cliente.id;
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
    // console.log(this.dato);
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
    // console.log(this.dato);
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
        // console.error(err);
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  ngOnInit(): void {
    this.getantecedentes();
  }
  // tslint:disable-next-line: typedef
  createHistorial() {
    this.historial.ClienteId = this.codigocliente;
    console.log(this.historial);
    this.historialService.saveHistorial(this.historial).subscribe(
      res => {
        this.historial1 = res;
        console.log(res);
        this.historialService.getHistorialCliente(this.codigocliente).subscribe(
          reslist => {
            this.antecedentescliente = reslist;
            this.toastr.success('Nuevo antecedente del cliente creado');
          }, err => {
            this.toastr.error('no se pudo crear nuevo antecedente del cliente');
          }
        );
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo historial');
      }
    );
  }
  deleteHistorial(codigo) {
    console.log(codigo);
    const codigoaeliminar = codigo;
    this.historialService.deleteHistorial(codigoaeliminar).subscribe(
      res => {
        if (res) {
          this.resultado = res;
          this.historialService.getHistorialCliente(this.codigocliente).subscribe(
            reslist => {
              this.antecedentescliente = reslist;
              this.toastr.success('Antecedente del cliente eliminado');
            }, err => {
              this.toastr.error('no se pudo eliminar el antecedente del cliente');
            }
          );
        } else {
          this.toastr.error('no se pudo eliminar');
        }
      }
    );
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'historial',
        'list'
      ]
    );
  }
}
