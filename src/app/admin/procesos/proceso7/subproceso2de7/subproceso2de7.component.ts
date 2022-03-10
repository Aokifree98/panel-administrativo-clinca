import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Horario } from 'src/app/models/horario';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { Genero } from 'src/app/models/genero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ListHorario } from 'src/app/models/listhorario';
import { CitaService } from 'src/app/services/cita.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-subproceso2de7',
  templateUrl: './subproceso2de7.component.html',
  styleUrls: ['./subproceso2de7.component.css']
})
export class Subproceso2de7Component implements OnInit {
  usuario: Admin = {
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
  pago = 0;
  total;
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
  estado: Genero [] = [
    {
      id: 1,
      name: 'reservado'
    },
    {
      id: 2,
      name: 'atencion'
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
  codigocliente = 0;
  reserva: ListCita = {
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
  horario: ListHorario = {
    id: 0,
    Day: '',
    Cupo: 0,
    EspecialistaId: 0,
    HoraId: 0,
  };
  horariodetail: Horario = {
    id: 0,
    Day: '',
    Cupo: 0,
    EspecialistaId: 0,
    HoraId: 0,
    especialista: {
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
      },
    },
    hora: {
      id: 0,
      Turn: '',
      Interval: '',
      Start: '',
      End: ''
    }
  };
  detailhorario: any = this.horariodetail;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private horarioService: HorarioService,
  ) { }
  onOptionsSelected(event) {
    const value = event.target.value;
    this.cliente.Gender = value;
    console.log(value);
  }
  onOptionsSelectedStatus(event) {
    const value = event.target.value;
    this.cliente.CivilStatus = value;
    console.log(value);
  }
  buscarcliente() {
    this.buscar = true;
    this.botones = false;
  }
  // tslint:disable-next-line: typedef
  crearcliente() {
    this.crear = true;
    this.botones = false;
  }
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
    this.usuario = JSON.parse(localStorage.getItem('admin'));
    // tslint:disable-next-line: radix
    const codigohorario = parseInt(this.activatedRoute.snapshot.paramMap.get('horario'));
    this.reserva.HorarioId = codigohorario;
    this.horarioService.getHorario(codigohorario.toString()).subscribe(
      reshorario => {
        this.horario = reshorario;
        this.detailhorario = reshorario;
        this.total = this.detailhorario.especialista.especialidad.Price;
        const parametrito = this.detailhorario.especialista.especialidad.id;
        if (parametrito === 2) {
          this.reserva.Type = 'medicina del dolor';
        } else {
          this.reserva.Type = 'normal';
        }
      }, err => {
        this.toastr.error('Error Api get horario');
      }
    );
  }
  onOptionsSelectedStatusReserva(event) {
    const value = event.target.value;
    this.reserva.Condition = value;
    console.log(value);
    if (value === 'atencion') {
      this.pago = this.total;
    }
  }
  reservar() {
    // tslint:disable-next-line: radix
    this.reserva.Pay = this.total;
    this.reserva.ClienteId = this.codigocliente;
    const filtro = this.total;
    const parametro = this.pago;
    if (filtro > parametro) {
      this.reserva.Condition = 'por pagar';
    }
    const fecha = this.activatedRoute.snapshot.paramMap.get('fecha').toString();
    this.reserva.Appointment =  new Date(fecha);
    this.reserva.Pay = this.pago.toString();
    this.reserva.AdminId = this.usuario.id;
    delete this.reserva.id;
    console.log(this.reserva);
    this.reservaService.saveCita(this.reserva).subscribe(
      res => {
        this.reserva1 = res;
        const codigoreserva = this.reserva1.id;
        const bandera = this.reserva1.Condition;
        if (bandera === 'reservado' || bandera === 'por pagar' ) {
          this.router.navigate(
            [
              'admin',
              'procesos',
              'proceso7',
              'subproceso4',
              codigoreserva
            ]
          );
          this.toastr.success('Procedamos con la boleta');
        } else if (bandera === 'atencion') {
          this.router.navigate(
            [
              'admin',
              'procesos',
              'proceso7',
              'subproceso3',
              codigoreserva
            ]
          );
          this.toastr.success('Procedamos con la toma de las funsiones vitales');
        }
      }, err => {
        this.toastr.error('Error crear cita');
      }
    );
  }
  atender() {
  }
}
