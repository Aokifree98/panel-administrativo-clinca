import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso1de4',
  templateUrl: './subproceso1de4.component.html',
  styleUrls: ['./subproceso1de4.component.css']
})
export class Subproceso1de4Component implements OnInit {
  reserva: Cita = {
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
    HorarioId: 0,
    admin: {
      id: 0,
      Name: '',
      LastName: '',
      Phone: '',
      Email: '',
      Photo: ''
    },
    cliente: {
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
      Photo: ''
    },
    horario: {
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
          Price: 0
        },
        doctor: {
          id: 0,
          Name: '',
          LastName: '',
          Email: '',
        },
      },
      hora: {
        id: 0,
        Turn: '',
        Interval: '',
        Start: '',
        End: ''
      }
    }
  };
  ticket: any = this.reserva;
  reservita: ListCita = {
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
  lositems: any = [];
  mensaje;
  mensaje1;
  sebusco = false;
  dato = '';
  codigoreserva;
  dia;
  mes;
  anio;
  stringdia;
  stringmes;
  lafecha;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
  ) { }
  // tslint:disable-next-line: typedef
  buscar(codigito) {
    this.reservaService.getCita(codigito).subscribe(
      res => {
        this.ticket = res;
        this.reservita = res;
        const codigo = this.ticket.id;
        this.codigoreserva = codigo;
        this.toastr.success('su ticket');
        this.sebusco = true;
        const fecha: Date = new Date(this.ticket.Appointment);
        this.dia = new Date(fecha).getDate() + 1;
        this.mes = new Date(fecha).getMonth() + 1;
        this.anio = new Date(fecha).getFullYear().toString();
        if (this.dia < 10) {
          this.stringdia = '0' + this.dia.toString();
        } else {
          this.stringdia = this.dia.toString();
        }
        if (this.mes < 10) {
          this.stringmes = '0' + this.mes.toString();
        } else {
          this.stringmes = this.mes.toString();
        }
        const fechastring = this.stringdia + '/' + this.stringmes + '/' + this.anio;
        this.lafecha = fechastring;
      },
      err => {
        console.log(err);
      }
    );
  }

  completado() {
    const elcodigo = this.codigoreserva;
    this.reservita.Condition = 'en espera';
    this.reservaService.updateCita(elcodigo, this.reservita).subscribe(
      resupdatereserva => {
        if (resupdatereserva !== []) {
          this.mensaje1 = resupdatereserva;
          this.router.navigate(
            [
              'admin',
              'home'
            ]
          );
        }
      },
      err => {
        console.log('error al actualizar');
      }
    );
  }
  ngOnInit(): void {
  }

}
