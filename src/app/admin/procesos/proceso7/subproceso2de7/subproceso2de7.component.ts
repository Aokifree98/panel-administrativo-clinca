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
import { ListDetalleCita } from 'src/app/models/Listdetallecita';
import { HorarioService } from 'src/app/services/horario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ListDermatomaFrontal } from 'src/app/models/listdermatomafrontal';
import { ListDermatomaPosterior } from 'src/app/models/listdermatomaposterior';
import { DetallecitacitaService } from 'src/app/services/detallecitacita.service';
import { DermatomafrontalService } from 'src/app/services/dermatomafrontal.service';
import { DermatomaposteriorService } from 'src/app/services/dermatomaposterior.service';

@Component({
  selector: 'app-subproceso2de7',
  templateUrl: './subproceso2de7.component.html',
  styleUrls: ['./subproceso2de7.component.css']
})
export class Subproceso2de7Component implements OnInit {
  detallecita: ListDetalleCita = {
    id: 0,
    G: '',
    P: '',
    A: '',
    C: '',
    Fum: new Date(),
    Papsmear: '',
    Bloodtype: '',
    Others: '',
    Startdate: '',
    Frequency: '',
    Datethatbecameimportant: new Date(),
    Perday: '',
    Perweek: '',
    Permonth: '',
    Byyear: '',
    One: false,
    Two: false,
    Three: false,
    Multiple: false,
    Unilateral: false,
    Bilateral: false,
    Symmetrical: false,
    Referred: false,
    Irradiated: false,
    Worsened: false,
    Parked: false,
    Decreasing: false,
    Scale: '',
    Datescale: new Date(),
    Oncological: false,
    Oncologicaltype: '',
    AssociatedwithDiagnosis: false,
    AssociatedwithTreatment: false,
    AssociatedwithProgressiveCancer: false,
    Addictions: false,
    Dying: false,
    Treatment: '',
    Observations: '',
    Protocol: false,
    Protocoltype: '',
    CitaId: 0
  };
  frontbody: ListDermatomaFrontal = {
    id: 0,
    DFC1: false,
    DFC21: false,
    DFC22: false,
    DFC3: false,
    DFC4: false,
    DFC51: false,
    DFC52: false,
    DFC61: false,
    DFC62: false,
    DFC71: false,
    DFC72: false,
    DFC81: false,
    DFC82: false,
    DFD101: false,
    DFD102: false,
    DFD103: false,
    DFD2: false,
    DFD3: false,
    DFD4: false,
    DFD5: false,
    DFD6: false,
    DFD7: false,
    DFD8: false,
    DFD9: false,
    DFD10: false,
    DFD11: false,
    DFD12: false,
    DFL1: false,
    DFL21: false,
    DFL22: false,
    DFL31: false,
    DFL32: false,
    DFL41: false,
    DFL42: false,
    DFL51: false,
    DFL52: false,
    DFS11: false,
    DFS12: false,
    DFS2: false,
    DFS3: false,
    CitaId: 0
  };
  endbody: ListDermatomaPosterior = {
    id: 0,
    DDC2: false,
    DDC3: false,
    DDC4: false,
    DDC51: false,
    DDC52: false,
    DDC53: false,
    DDC61: false,
    DDC62: false,
    DDC63: false,
    DDC71: false,
    DDC72: false,
    DDC73: false,
    DDC81: false,
    DDC82: false,
    DDC83: false,
    DDD101: false,
    DDD102: false,
    DDD103: false,
    DDD2: false,
    DDD3: false,
    DDD4: false,
    DDD5: false,
    DDD6: false,
    DDD7: false,
    DDD8: false,
    DDD9: false,
    DDD10: false,
    DDD11: false,
    DDD12: false,
    DDL1: false,
    DDL2: false,
    DDL31: false,
    DDL32: false,
    DDL41: false,
    DDL42: false,
    DDL51: false,
    DDL52: false,
    DDL53: false,
    DDL54: false,
    DDS11: false,
    DDS12: false,
    DDS13: false,
    DDS14: false,
    DDS21: false,
    DDS22: false,
    DDS3: false,
    DDS4: false,
    DDS5: false,
    CitaId: 0
  };
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
  tipo: Genero [] = [
    {
      id: 1,
      name: 'normal'
    },
    {
      id: 2,
      name: 'medicina del dolor'
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
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
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
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
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
  resultado: any;
  resultado2: any;
  resultado3: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private horarioService: HorarioService,
    private detallecitaService: DetallecitacitaService,
    private dermatomafrontalService: DermatomafrontalService,
    private dermatomaposteriorService: DermatomaposteriorService,
  ) { }
  onOptionsSelected(event) {
    const value = event.target.value;
    this.cliente.Gender = value;
    console.log(value);
  }
  onOptionsSelectedType(event) {
    const value = event.target.value;
    this.reserva.Type = value;
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
    this.reserva.Pay = this.detailhorario.especialista.especialidad.Price;
    // const filtro = this.total;
    // const parametro = this.pago;
    // if (filtro > parametro) {
    //   this.reserva.Condition = 'por pagar';
    // }
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
        const parametrito = this.reserva1.Type;
        if (parametrito === 'medicina del dolor') {
          this.detallecita.CitaId = codigoreserva;
          this.frontbody.CitaId = codigoreserva;
          this.endbody.CitaId = codigoreserva;
          this.detallecitaService.saveDetalleCita(this.detallecita).subscribe(
            resdedtallecita => {
              this.resultado = resdedtallecita;
              console.log(this.resultado);
            }, err => {
              this.toastr.error('Error Api CREATE detalle cita');
            }
          );
          this.dermatomafrontalService.saveDermatomafrontal(this.frontbody).subscribe(
            resfrontal => {
              this.resultado2 = resfrontal;
              console.log(this.resultado2);
            }, err => {
              this.toastr.error('Error Api CREATE dermatoma frontal');
            }
          );
          this.dermatomaposteriorService.saveDermatomaposterior(this.endbody).subscribe(
            resposterior => {
              this.resultado3 = resposterior;
              console.log(this.resultado3);
            }, err => {
              this.toastr.error('Error Api CREATE dermatoma posterior');
            }
          );
        }
        if (bandera === 'reservado') {
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
