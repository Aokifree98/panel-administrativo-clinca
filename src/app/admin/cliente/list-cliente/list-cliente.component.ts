import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  clientes: any = [];
  lista = true;
  reporte = false;
  busqueda = false;
  resultado = false;
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
  dato;
  codigocliente;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }
  informe() {
    this.lista = false;
    this.reporte = true;
    this.busqueda = false;
    this.resultado = false;
  }
  // tslint:disable-next-line: typedef
  ver() {
    this.lista = true;
    this.reporte = false;
    this.busqueda = false;
    this.resultado = false;
  }
  // tslint:disable-next-line: typedef
  buscar() {
    this.lista = false;
    this.reporte = false;
    this.busqueda = true;
    this.resultado = false;
  }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.lista = false;
        this.reporte = false;
        this.resultado = true;
        this.busqueda = false;
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
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.lista = false;
        this.reporte = false;
        this.resultado = true;
        this.busqueda = false;
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // para listar a los clientes
  // tslint:disable-next-line: typedef
  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'cliente',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'cliente',
        'update',
        codigoaeditar
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editarsearch() {
    const parametro = this.codigocliente;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'cliente',
        'update',
        parametro
      ]
    );
  }

}
