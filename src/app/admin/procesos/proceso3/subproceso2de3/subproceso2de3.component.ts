import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from 'src/app/models/especialista';
import { CitaService } from 'src/app/services/cita.service';
import { AdminService } from 'src/app/services/admin.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HorarioService } from 'src/app/services/horario.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso2de3',
  templateUrl: './subproceso2de3.component.html',
  styleUrls: ['./subproceso2de3.component.css']
})
export class Subproceso2de3Component implements OnInit {
  horario: any = [];
  horariofiltrado: any = [];
  hoy = new Date();
  numerodia;
  reservas: any = [];
  reservasdia: any = [];
  filtrada: any = [];
  numerofecha = new Date().getTime();
  dia;
  reserva: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: 'normal',
    Condition: '',
    Cardiacpressure: '',
    Oxygenation: '',
    Temperature: '',
    Weight: '',
    Size: '',
    Companion: '',
    Relationship: '',
    Currentepisode: '',
    Beginningprinciples: '',
    Problem: '',
    Examination: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0
  };
  reserva1: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: 'normal',
    Condition: '',
    Cardiacpressure: '',
    Oxygenation: '',
    Temperature: '',
    Weight: '',
    Size: '',
    Companion: '',
    Relationship: '',
    Currentepisode: '',
    Beginningprinciples: '',
    Problem: '',
    Examination: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0
  };
  numerocliente;
  codigoespecialista;
  codigoreserva;
  mensaje: any = [];
  mensajito;
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
  especialistadetalle: Especialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad: {
      id: 0,
      Name: '',
      Image: '',
      Price: 0
    },
    doctor: {
      id: 0,
      Name: '',
      LastName: '',
      Email: '',
      Photo: ''
    }
  }
  detailespecialista: any = this.especialistadetalle;
  admin: Admin = {
    id: 0,
    Name: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '',
    Condition: '',
    ConditionMin: '',
    Photo: '',
    Code: ''
  };
  codigoadmin;
  lasreservas: any = [];
  seleccionados: any = [];
  pago = 0;
  indices: any = [];
  check = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
    private reservaService: CitaService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private especialistaService: EspecialistaService,
  ) { }
  // tslint:disable-next-line: typedef
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    let pinshifecha: string;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + dd;
    pinshifecha = cadena.toString();
    const a2 = new Date(pinshifecha).getTime();
    this.numerodia = a2;
  }
  ngOnInit(): void {
    this.fechadeldia();
    // para sacar el codigo del admin jejeje
    this.adminService.client$.subscribe(
      res => {
        if (res) {
          this.admin = res;
          this.codigoadmin = this.admin.id;
        }
      }
    );
    console.log(this.numerodia);
    // tslint:disable-next-line: radix
    const codigoespecialista = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigoespecialista = codigoespecialista.toString();
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    this.numerocliente = cliente;
    this.reserva.ClienteId = this.numerocliente;
    this.reserva.AdminId = this.codigoadmin;
    const lafecha = new Date(this.numerodia);
    const array =
          [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes'
          ];
    const fechasa = lafecha.setDate(lafecha.getDate() + 1);
    const fechaselect = new Date(fechasa);
    const numerodia = fechaselect.getUTCDay() - 1;
    let nombredia = array[numerodia];
    if (numerodia === -1) {
      nombredia = 'sabado';
    }
    this.dia = nombredia;
    const eldia = this.dia;
    const fecha = this.numerodia;
    this.especialistaService.getEspecialista(this.codigoespecialista).subscribe(
      res => {
        if (res) {
          this.detailespecialista = res;
        }
      }
    );
    this.reservaService.getCitasFiltro(this.dia, this.codigoespecialista).subscribe(
      res => {
        this.reservas = res;
        const arrayreservas = this.reservas;
        const reservasfecha = [];
        for (const obj1 of arrayreservas) {
          const numfecha = new Date(obj1.reserva.FechaReserva).getTime();
          if (numfecha === fecha) {
            reservasfecha.push(obj1);
            this.reservasdia = reservasfecha;
          }
        }
        this.horarioService.getHorarioEspecialidaddDia(this.dia, this.codigoespecialista).subscribe(
          resp => {
            this.horario = resp;
            if (Object.entries(this.reservasdia).length > 0) {
              const array1 = this.reservasdia;
              const array2 = this.horario;
              const filtrado: any = [];
              for (const filtro1 of array2) {
                const codigohorario = filtro1.id;
                for (const filtro2 of array1) {
                  const codigofiltrar = filtro2.HorarioId;
                  if (codigohorario === codigofiltrar) {
                    filtrado.push(filtro1);
                    this.filtrada = filtrado;
                  }
                }
              }
              const array3 = this.filtrada;
              const respuesta = array2.filter(alv => !array3.includes(alv));
              this.horariofiltrado = respuesta;
            } else if (Object.entries(this.reservasdia).length === 0) {
              this.horariofiltrado = this.horario;
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    );
  }
  // tslint:disable-next-line: typedef
  // seleccionar(codigo) {
  //   const parametro = +codigo;
  //   const array = this.horariofiltrado;
  //   const lista = this.seleccionados;
  //   for (const objeto of array) {
  //     const indice = array.indexOf(objeto);
  //     const turnito = objeto.hora.Turno;
  //     const precio1 = +objeto.especialista.Precio1;
  //     const precio2 = +objeto.especialista.Precio2;
  //     if (objeto.id === parametro) {
  //       if (turnito === 'dia') {
  //         this.pago = this.pago + precio2;
  //       } else if (turnito === 'noche') {
  //         this.pago = this.pago + precio1;
  //       }
  //       lista.push(objeto);
  //       this.indices.push(indice);
  //       this.seleccionados = lista;
  //       array.splice(indice, 1);
  //       this.horariofiltrado = array;
  //     }
  //   }
  //   if (Object.entries(this.seleccionados).length > 0) {
  //     this.check = true;
  //   } else if (Object.entries(this.seleccionados).length === 0) {
  //     this.check = false;
  //   }
  // }
  // // tslint:disable-next-line: typedef
  // borrar(objeto) {
  //   const losindices = this.indices;
  //   const turnito = objeto.hora.Turno;
  //   const precio1 = +objeto.especialista.Precio1;
  //   const precio2 = +objeto.especialista.Precio2;
  //   if (turnito === 'dia') {
  //     this.pago = this.pago - precio2;
  //   } else if (turnito === 'noche') {
  //     this.pago = this.pago - precio1;
  //   }
  //   const array = this.seleccionados;
  //   const indice = array.indexOf(objeto);
  //   const elindice = losindices[indice];
  //   this.horariofiltrado.splice(elindice, 0, objeto);
  //   losindices.splice(indice, 1);
  //   this.indices = losindices;
  //   array.splice(indice, 1);
  //   this.seleccionados = array;
  //   if (Object.entries(this.seleccionados).length > 0) {
  //     this.check = true;
  //   } else if (Object.entries(this.seleccionados).length === 0) {
  //     this.check = false;
  //   }
  // }
  // tslint:disable-next-line: typedef
  reservar() {
    delete this.reserva.id;
    this.reserva.Pay = this.pago.toString();
    this.reserva.Condition = 'en espera';
    this.reserva.Appointment = new Date(this.numerodia);
    console.log(this.reserva);
    this.reservaService.saveCita(this.reserva).subscribe(
      res => {
        if (res) {
          this.reserva1 = res;
          this.codigoreserva = this.reserva1.id;
          this.finalizar();
          // poner de manera que espere el envio del correo a la creacion de los items
        } else {
          this.toastr.error('no se pudo crear la reserva');
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  finalizar() {
    const parametro = this.codigoreserva;
    // tslint:disable-next-line: deprecation
    this.reservaService.getSendreservation(parametro).subscribe(
      res => {
        if (res) {
          this.toastr.info('correo enviado satisfactoriamente');
          this.router.navigate(
            [
              'admin',
              'procesos',
              'proceso3',
              'subproceso3',
              parametro
            ]
          );
        } else {
          this.toastr.error('no se pudo enviar el correo');
        }
      }
    );
  }
}
