import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  clientes: any = [];
  comentarios: any = [];
  testimonios: any = [];
  citas: any = [];
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
  parametrito;
  mensaje;
  mensaje1;
  mensaje2;
  mensaje3;
  mensaje4;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private clienteService: ClienteService,
    private testimonioService: TestimonioService,
    private comentarioService: ComentarioService,
  ) { }
  getcitascliente(codigo) {

  }
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
  eliminar(codigo) {
    this.parametrito = codigo;

    this.comentarioService.getComentariosbyCliente(codigo).subscribe(
      rescoments => {
        this.comentarios = rescoments;
        const numero = Object.entries(this.comentarios).length;
        if (numero > 0) {
          this.comentarioService.deleteComentarioCliente(this.parametrito).subscribe(
            resdeletecoment => {
              this.mensaje = resdeletecoment;
              this.toastr.info('Se elimino los comentarios del cliente');
            }, err => {
              this.toastr.error('Error Api delete coment cliente');
            }
          );
        } else {
          this.toastr.info('El cliente no tiene Comentarios');
        }
      }, err => {
        this.toastr.error('Error Api ccomentarios cliente');
      }
    );
    this.testimonioService.getTestimoniosbyCLiente(codigo).subscribe(
      restestimons => {
        this.testimonios = restestimons;
        const numero1 = Object.entries(this.testimonios).length;
        if (numero1 > 0) {
          this.testimonioService.deleteTestimonioCliente(this.parametrito).subscribe(
            resdeletetestimo => {
              this.mensaje = resdeletetestimo;
              this.toastr.info('Se elimino los testimonios del cliente');
            }, err => {
              this.toastr.error('Error Api delete testimonios cliente');
            }
          );
        } else {
          this.toastr.info('El cliente no tiene testimonios');
        }
      }, err => {
        this.toastr.error('Error Api testimonios cliente');
      }
    );
    this.reservaService.getClientBooking(codigo).subscribe(
      rescitas => {
        this.citas = rescitas;
        const numero2 = Object.entries(this.testimonios).length;
        if (numero2 > 0) {
          this.reservaService.deleteCitaCliente(this.parametrito).subscribe(
            resdeletecita => {
              this.mensaje3 = resdeletecita;
              this.toastr.info('Se elimino las Citas del cliente');
              this.clienteService.deleteCliente(codigo).subscribe(
                resdeleteclient => {
                  this.mensaje4 = resdeleteclient;
                  console.log(resdeleteclient);
                  this.toastr.info('Cliente Eliminado');
                  window.location.reload();
                }
              );
            }, err => {
              this.toastr.error('Error Api delete testimonios cliente');
            }
          );
        } else {
          this.clienteService.deleteCliente(codigo).subscribe(
            resdeleteclient => {
              this.mensaje4 = resdeleteclient;
              console.log(resdeleteclient);
              this.toastr.info('El cliente no tiene testimonios');
              window.location.reload();
            }
          );
        }
      }, err => {
        this.toastr.error('Error Api testimonios cliente');
      }
    );

  }
}
