import { ToastrService } from 'ngx-toastr';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { Component, OnInit } from '@angular/core';
import { ListCita } from 'src/app/models/listcita';
import { Chatmodel } from 'src/app/models/chatmodel';
import { Mensajemodel } from 'src/app/models/mensajemodel';
import { ChatService } from 'src/app/services/chat.service';
import { CitaService } from 'src/app/services/cita.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-subproceso1de6',
  templateUrl: './subproceso1de6.component.html',
  styleUrls: ['./subproceso1de6.component.css']
})
export class Subproceso1de6Component implements OnInit {
  bandera = true;
  lasreservas: any = [];
  filtrados: any = [];
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
  mss: any;
  mss2: any;
  chat: Chat = {
    id: 0,
    CreationDate: new Date(),
    Condition: '',
    AdminId: 0,
    ClienteId: 0
  };
  chat1: Chat = {
    id: 0,
    CreationDate: new Date(),
    Condition: '',
    AdminId: 0,
    ClienteId: 0
  };
  chatmodel: Chatmodel = {
    id: 0,
    CreationDate: new Date(),
    Condition: '',
    AdminId: 0,
    ClienteId: 0,
    admin: {
      id: 0,
      Name: '',
      LastName: '',
      Photo: '',
    },
    cliente: {
      id: 0,
      Name: '',
      LastName: '',
      Photo: ''
    }
  };
  chatmodel1: any = this.chatmodel;
  mensaje: Mensaje = {
    id: 0,
    SendDate: new Date(),
    Message: '',
    Direction: '',
    ChatId: 0
  };
  mensaje1: Mensaje = {
    id: 0,
    SendDate: new Date(),
    Message: '',
    Direction: '',
    ChatId: 0
  };
  mensajemodel: Mensajemodel = {
    id: 0,
    SendDate: new Date(),
    Message: '',
    Direction: '',
    ChatId: 0,
    chat: {
      id: 0,
      CreationDate: new Date(),
      Condition: '',
      AdminId: 0,
      ClienteId: 0,
      cliente: {
        id: 0,
        Name: '',
        LastName: '',
        Photo: ''
      }
    }
  };
  mensajemodel1: any = this.mensajemodel;
  mensajes: any = [];
  codigocliente;
  codigoadmin;
  codigochat;
  constructor(
    private toastr: ToastrService,
    private chatService: ChatService,
    private reservaService: CitaService,
    private mensajeService: MensajeService,
  ) { }
  wasa() {
    console.log(this.mensaje.Message);
    if (this.mensaje.Message !== '') {
      this.mensaje.Message = '';
    }
  }
  // tslint:disable-next-line: typedef
  anwerchat(wasa) {
    const codigo = this.codigochat;
    this.mensaje.ChatId = codigo;
    this.mensaje.Message = wasa;
    this.mensaje.Direction = 'derecha';
    this.mensaje.SendDate = new Date();
    console.log(this.mensaje);
    this.mensajeService.saveMensaje(this.mensaje).subscribe(
      res => {
        if (res) {
          this.mensaje1 = res;
          const elcodigo = this.mensaje1.ChatId;
          this.chat.Condition = 'enviado';
          this.chatService.updateChat(elcodigo, this.chat).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.chat1 = res;
                this.toastr.info('se respondio el mensaje');
                this.limpiar();
              } else {
                this.toastr.error('no es pudo responder');
              }
            }
          );
        }
      }
    );
  }
  // tslint:disable-next-line: typedef
  limpiar() {
    this.mensaje.Message = '';
    console.log(this.mensaje);
    this.toastr.info('se limpio la caja de texto');
  }
  getreservas() {
    const hoynumber = new Date().getTime();
    let a = 0;
    const limite = 10 * 60;
    this.reservaService.gettopayCita().subscribe(
      res => {
        console.log(res);
        if (res !== []) {
          this.lasreservas = res;
          this.filtrados = res;
          let diferencia = 0;
          for (const obj of this.lasreservas) {
            const parametro = new Date(obj.createdAt).getTime();
            const resta = hoynumber - parametro;
            const division = resta / 6000;
            diferencia = limite - division;
            console.log(parametro);
            if (diferencia > 0) {
              this.filtrados[a].createdAt = diferencia;
            } else {
              this.filtrados[a].createdAt = 'ya vencio';
            }
            a++;
          }
          console.log(this.lasreservas);
          console.log(this.filtrados);
          console.log(hoynumber);

        } else {
          this.toastr.warning('No hay reservas por pagar');
          this.bandera = false;
        }
      },
      err => {
        this.toastr.error('Error en el Api');
      }
    );
  }
  borrar(par) {
    this.reservaService.deleteCita(par).subscribe(
      res => {
        if (res !== null) {
          this.mss2 = res;
        }
      },
      err => {
        this.toastr.error('Error en el api');
      }
    );
  }

  pagado(par) {
    this.reservaService.getCita(par).subscribe(
      res => {
        if (res !== null) {
          this.reserva = res;
          this.reserva.Condition = 'reservado';
          const codigo = this.reserva.id.toString();
          this.reservaService.updateCita(codigo, this.reserva).subscribe(
            resup => {
              if (resup !== null) {
                this.mss = resup;
              }
            },
            err => {
              this.toastr.error('Error en el Api');
            }
          );
        }
      },
      err => {
        this.toastr.error('Error de Api');
      }
    );
  }
  seleccionar(par) {
    console.log(par);
    this.chatService.getClientChat(par).subscribe(
      res => {
        if (res) {
          this.chat = res;
          this.chatmodel = res;
          const codigaso = this.chat.id.toString();
          this.mensajeService.getMSSAnswers(codigaso).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res) {
                this.mensajes = res;
                this.toastr.info('mensajes con el cliente');
              } else {
                this.toastr.error('no se pueden listar los mensajes');
              }
            }
          );
        }
      }
    );
  }

  ngOnInit(): void {
    this.getreservas();
  }

}

