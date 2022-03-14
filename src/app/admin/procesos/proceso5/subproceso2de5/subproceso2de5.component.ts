import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-subproceso2de5',
  templateUrl: './subproceso2de5.component.html',
  styleUrls: ['./subproceso2de5.component.css']
})
export class Subproceso2de5Component implements OnInit {
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
  fechaActual: any;
  mensaje;
  mensaje1;
  lositems: any = [];
  atencion = false;
  postergacion = false;
  codigoreserva;
  numerofecha;
  codigocancha;
  datito = new Date();
  elcodigo;
  cantidad = 0;
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
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line: typedef
  enableatender() {
    this.atencion = true;
  }
  // tslint:disable-next-line: typedef
  enablepostergar() {
    this.postergacion = true;
  }

  sumarDias(fecha, dia) {
    fecha.setDate(fecha.getDate() + dia);
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1; // As January is 0.
    const yyyy = fecha.getFullYear();
    let returnDate = '';
    returnDate += yyyy;
    if (mm < 10) {
      returnDate += `-0${mm}`;
      } else {
      returnDate += `-${mm}`;
      }

    if (dd < 10) {
    returnDate += `-0${dd}`;
    } else {
    returnDate += `-${dd}`;
    }
    return returnDate;
  }
  // tslint:disable-next-line: typedef
  getNowDate() {
    const fecha = new Date();
    const today = new Date();
    // return returnDate;
    const d = new Date(today);
    // this.sumarDias(returnDate)
    return this.sumarDias(d, 1);
  }

  ngOnInit(): void {
    this.fechaActual = this.getNowDate();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.ticket = res;
          this.reservita = res;
          const codigo = this.ticket.id;
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
          this.toastr.success('su ticket');
          // if (codigo < 10) {
          //   this.elcodigo = '00000' + codigo.toString();
          // } else if (codigo < 100) {
          //   this.elcodigo = '0000' + codigo.toString();
          // } else if (codigo < 1000) {
          //   this.elcodigo = '000' + codigo.toString();
          // } else if (codigo < 10000) {
          //   this.elcodigo = '00' + codigo.toString();
          // } else if (codigo < 100000) {
          //   this.elcodigo = '0' + codigo.toString();
          // } else {
          //   this.elcodigo = codigo.toString();
          // }
          this.codigoreserva = codigo;
          this.toastr.success('su boleta');
        },
        err => console.log(err)
      );
    }
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

  seguirpostergando(fecha) {
    const estado = this.ticket.Estado;
    if (estado === 'reservado' || estado === 'no vino') {
      this.numerofecha = new Date(fecha).getTime();
      const parametro0 = this.codigocancha;
      const parametro1 = this.codigoreserva;
      const parametro2 = this.numerofecha;
      this.toastr.info('Proseguir con la postergacion');
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso2',
          'subproceso2',
          parametro0,
          parametro1,
          parametro2
        ]
      );
    } else {
      this.toastr.warning('el cliente no puede realizar postergacion');
      this.toastr.info(`el estado es: ${estado}`);
    }
  }

  // tslint:disable-next-line: typedef
  descargar() {
    const element = document.getElementById('parapdf');
    html2canvas(element).then(
      (canvas) => {
        const imgWidth = 208;
        // const pageheight = 295;
        const imgheight = canvas.height * imgWidth / canvas.width;
        const heightleft = imgheight;
        console.log(canvas);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, heightleft);
        pdf.save('boleta.pdf');
      }
    );
  }

}
