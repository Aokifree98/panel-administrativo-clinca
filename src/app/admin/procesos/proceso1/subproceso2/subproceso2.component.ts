import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/models/especialidad';
import { Especialista } from 'src/app/models/especialista';
import { CitaService } from 'src/app/services/cita.service';
import { AdminService } from 'src/app/services/admin.service';
import { HorarioService } from 'src/app/services/horario.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-subproceso2',
  templateUrl: './subproceso2.component.html',
  styleUrls: ['./subproceso2.component.css']
})
export class Subproceso2Component implements OnInit {
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
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0
  };
  reserva1: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
    Type: '',
    Condition: '',
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
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
      MedicalSchoolNumber: '',
      Email: '',
      Photo: ''
    }
  };
  detailespecialista: any = this.especialistadetalle;
  codigoadmin;
  lasreservas: any = [];
  seleccionados: any = [];
  pago = 0;
  indices: any = [];
  check = false;
  lositems: any = [];
  reservado = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
    private reservaService: CitaService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private especialistaService: EspecialistaService,
  ) { }

  ngOnInit(): void {
    // para sacar el codigo del admin jejeje
    this.adminService.client$.subscribe(
      res => {
        if (res) {
          this.admin = res;
          this.codigoadmin = this.admin.id;
        }
      }
    );
    // tslint:disable-next-line: radix
    const codigoespecialista = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.codigoespecialista = codigoespecialista.toString();
    this.especialistaService.getEspecialista(this.codigoespecialista).subscribe(
      res => {
        this.detailespecialista = res;
        this.pago = this.detailespecialista.especialidad.Price;
      }, err => {
        this.toastr.error('Eoor de Api');
      }
    );
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('cliente'));
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.numerocliente = cliente;
    this.reserva.ClienteId = this.numerocliente;
    this.reserva.AdminId = this.codigoadmin;
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
    // tslint:disable-next-line: deprecation
    this.reservaService.getCitasFiltro(this.dia, this.codigoespecialista).subscribe(
      reservas1 => {
        this.reservas = reservas1;
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
    //       // tslint:disable-next-line: no-shadowed-variable
          disponibilidad => {
            this.horario = disponibilidad;
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
  reservar(codigo) {
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    delete this.reserva.id;
    this.reserva.Pay = this.pago.toString();
    this.reserva.Condition = 'reservado';
    this.reserva.HorarioId = codigo;
    // tslint:disable-next-line: radix
    this.reserva.Appointment = new Date(fechita);
    // tslint:disable-next-line: deprecation
    this.reservaService.saveCita(this.reserva).subscribe(
      res => {
        if (res) {
          this.reserva1 = res;
          this.codigoreserva = this.reserva1.id;
          this.finalizar();
        } else {
          this.toastr.error('no se pudo crear la reserva');
        }
      }
    );
  }
  porpagar(codigo) {
    // tslint:disable-next-line: radix
    const fechita = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    delete this.reserva.id;
    this.reserva.Pay = this.pago.toString();
    this.reserva.Condition = 'por pagar';
    this.reserva.HorarioId = codigo;
    this.reserva.Appointment = new Date(fechita);
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
              'proceso1',
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
