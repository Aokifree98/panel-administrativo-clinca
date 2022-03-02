import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { AdminService } from 'src/app/services/admin.service';
import { HorarioService } from 'src/app/services/horario.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso2de2',
  templateUrl: './subproceso2de2.component.html',
  styleUrls: ['./subproceso2de2.component.css']
})
export class Subproceso2de2Component implements OnInit {
  horario: any = [];
  horariofiltrado: any = [];
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
  reservado = false;
  botones = true;
  lomismo = false;
  cambiar = false;
  conflicto = false;
  itemsigualito: any = [];
  larespuesta: any;
  larespuestaitem: any;
  elmensaje: any;
  sepago;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
    private reservaService: CitaService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private especialistaService: EspecialistaService,
    ) { }

  // tslint:disable-next-line: typedef
  locambio() {
    this.cambiar = true;
    this.botones = false;
  }

  // tslint:disable-next-line: typedef
  hayconflicto() {
    this.cambiar = true;
    this.lomismo = false;
  }

  ngOnInit(): void {
    // para sacar el codigo del admin jejeje
    // tslint:disable-next-line: deprecation
    this.adminService.client$.subscribe(
      res => {
        if (res) {
          this.admin = res;
          this.codigoadmin = this.admin.id;
        }
      }
    );
    // tslint:disable-next-line: radix
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigoespecialista = codigo.toString();
    // tslint:disable-next-line: radix
    const codiguillo = parseInt(this.activatedRoute.snapshot.paramMap.get('reserva'));
    this.codigoreserva = codiguillo.toString();
    console.log(`codigo de la reserva: ${this.codigoreserva}`);

    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const lafecha = new Date(fechita);
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
    const fecha = fechita;
    console.log(this.dia);
    console.log(this.codigoespecialista);
    // tslint:disable-next-line: deprecation
    this.reservaService.getCita(this.codigoreserva).subscribe(
      res => {
        this.reserva1 = res;
        this.sepago = +this.reserva1.Pay;
      }
    );
    // tslint:disable-next-line: deprecation
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
        // tslint:disable-next-line: deprecation
        this.horarioService.getHorarioEspecialidaddDia(this.dia, this.codigoespecialista).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          rest => {
            this.horario = rest;
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
  igual() {
    this.lomismo = true;
    this.botones = false;
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: deprecation
    this.reservaService.getCita(this.codigoreserva).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      res => {
        this.reserva = res;
        this.reserva.Condition = 'postergado';
        this.reserva.Appointment = new Date(fechita);
        // tslint:disable-next-line: deprecation
        this.reservaService.updateCita(this.codigoreserva, this.reserva).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            this.larespuesta = res;
            console.log('se actualizo la reserva');
            // tslint:disable-next-line: deprecation
            this.reservaService.getSendpostpone(this.codigoreserva).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                this.elmensaje = res;
                const parametro =  this.codigoreserva;
                console.log('se envio el correo');
                this.router.navigate(
                  [
                    'admin',
                    'procesos',
                    'proceso2',
                    'subproceso3',
                    parametro
                  ]
                );
              }
            );
          }
        );
      }
    );
    // tslint:disable-next-line: deprecation
    // this.itemService.getHome(this.codigoreserva).subscribe(
    //   res => {
    //     const lalista: any = res;
    //     const numero1 = Object.entries(lalista).length;
    //     const array1 = this.horariofiltrado;
    //     console.log(lalista);
    //     console.log(array1);
    //     console.log(numero1);
    //     const nuevos: any = [];
    //     for (const elitem of array1) {
    //       for (const otroitem of lalista) {
    //         const parametro = elitem.hora.Horainicio;
    //         const parametro1 = otroitem.horario.hora.Horainicio;
    //         if (parametro === parametro1) {
    //           nuevos.push(elitem);
    //           this.itemsigualito = nuevos;
    //         }
    //       }
    //     }
    //     console.log(nuevos);
    //     const numero2 = Object.entries(this.itemsigualito).length;
    //     if (numero1 === numero2) {
    //       const array2: any = this.itemsigualito;
    //       for (const par1 of array2) {
    //         // for (const iterator of lalista) {
    //         //   this.item.id = iterator.id;
    //         //   this.item.Estado = 'postergado';
    //         //   this.item.ReservaId = this.codigoreserva;
    //         //   this.item.HorarioId = par1.id;
    //         //   // tslint:disable-next-line: deprecation
    //         //   this.itemService.updateItem(this.item.id.toString(), this.item).subscribe(
    //         //     // tslint:disable-next-line: no-shadowed-variable
    //         //     res => {
    //         //       console.log('se actualizo');
    //         //       this.larespuestaitem = res;
    //         //     }
    //         //   );
    //         // }
    //       }

    //     } else if (numero1 > numero2) {
    //       this.toastr.info('hay un conflicto, en el cual no ya esta tomado una de las horas');
    //       this.conflicto = true;
    //     } else if (numero1 < numero2) {
    //       this.toastr.error('error garrafal en el filtro');
    //     }
    //   }
    // );
  }

  // tslint:disable-next-line: typedef
  postergar() {
    delete this.reserva.id;
    this.reserva.Pay = this.pago.toString();
    this.reserva.Condition = 'postergado';
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.reserva.Appointment = new Date(fechita);
    // tslint:disable-next-line: deprecation
    // tslint:disable-next-line: deprecation
    // this.itemService.getHome(this.codigoreserva).subscribe(
    //   res => {
    //     const lalista: any = res;
    //     for (const par1 of rangosdehora) {
    //       for (const par2 of lalista) {
    //         this.item.id = par2.id;
    //         this.item.Estado = 'postergado';
    //         this.item.ReservaId = this.codigoreserva;
    //         this.item.HorarioId = par1.id;
    //         // tslint:disable-next-line: deprecation
    //         this.itemService.updateItem(this.item.id.toString(), this.item).subscribe(
    //           // tslint:disable-next-line: no-shadowed-variable
    //           res => {
    //             console.log('se actualizo');
    //             this.larespuestaitem = res;
    //           }
    //         );
    //       }
    //     }
    //   }
    // );
    // tslint:disable-next-line: deprecation
    this.reservaService.getCita(this.codigoreserva).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      res => {
        this.reserva = res;
        this.reserva.Condition = 'postergado';
        this.reserva.Appointment = new Date(fechita);
        // tslint:disable-next-line: deprecation
        this.reservaService.updateCita(this.codigoreserva, this.reserva).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res) {
              this.larespuesta = res;
              console.log('se actualizo la reserva');
              // tslint:disable-next-line: deprecation
              this.reservaService.getSendpostpone(this.codigoreserva).subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                res => {
                  this.elmensaje = res;
                  const parametro =  this.codigoreserva;
                  console.log('se envio el correo');
                  this.router.navigate(
                    [
                      'admin',
                      'procesos',
                      'proceso2',
                      'subproceso3',
                      parametro
                    ]
                  );
                }
              );
            } else {
              this.toastr.error('no se pudo crear la reserva');
            }
          }
        );
      }
    );
  }
}
