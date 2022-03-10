import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/models/especialista';
import { HorarioService } from 'src/app/services/horario.service';
import { ListEspecialista } from 'src/app/models/listespecialista';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-list-horario',
  templateUrl: './list-horario.component.html',
  styleUrls: ['./list-horario.component.css']
})
export class ListHorarioComponent implements OnInit {
  especialistas: any = [];
  horarios: any = [];
  filtro1horario: any = [];
  filtro2horario: any = [];
  banderadia = false;
  banderatarde = false;
  dias = [
    { id: 1, name: 'lunes'},
    { id: 2, name: 'martes'},
    { id: 3, name: 'miercoles'},
    { id: 4, name: 'jueves'},
    { id: 5, name: 'viernes'},
    { id: 6, name: 'sabado'},
    { id: 7, name: 'domingo'},
  ];
  data = {
    dia: '',
    codigo: 0
  };
  especialista: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
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
  datos = {
    nombre: '',
    doctor: '',
    dia: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horarioService: HorarioService,
    private especialistaService: EspecialistaService

    // private especialidadService: EspecialidadService
  ) { }
  crear() {
    this.router.navigate(
      [
        'admin',
        'horario',
        'create'
      ]
    );
  }
  getEspecialistas() {
    this.especialistaService.getEspecialistas().subscribe(
      res => {
        this.especialistas = res;
      },
      err => console.error(err)
    );
  }
  elejir(codigo) {
    this.data.codigo = codigo;
    this.especialistaService.getEspecialista(codigo).subscribe(
      res => {
        this.especialista = res;
        this.detailespecialista = res;
        this.datos.doctor = this.detailespecialista.doctor.Name + ' ' + this.detailespecialista.doctor.LastName;
        this.datos.nombre = this.detailespecialista.especialidad.Name;
        this.data.codigo = codigo;
      },
      err => {
        console.log(err);
      }
    );
  }
  diaelegido(name) {
    this.data.dia = name;
    this.datos.dia = name;
  }
  viewhorario() {
    console.log(this.data);
    const dia = this.data.dia.toString();
    const codigo = this.data.codigo.toString();
    this.horarioService.getHorarioEspecialidaddDia(dia, codigo).subscribe(
      res => {
        this.horarios = res;
        const array = this.horarios;
        const filtro1: any = [];
        const filtro2: any = [];
        const parametro1 = 'mañana';
        const parametro2 = 'tarde';
        for (const obj of array) {
          const par = obj.hora.Turn;
          if (par === parametro1) {
            filtro1.push(obj);
            this.filtro1horario = filtro1;
          } else if (par === parametro2) {
            filtro2.push(obj);
            this.filtro2horario = filtro2;
          }
        }
        if (Object.entries(this.filtro1horario).length > 0) {
          this.banderadia = true;
        }
        if (Object.entries(this.filtro2horario).length > 0) {
          this.banderatarde = true;
        }
        this.toastr.info('Horario del especialista Elegido');
      }
    );
  }
  // editar(wasa) {
  //   console.log(wasa);
  //   this.toastr.warning('la edicion esta disponible en la version platinum');
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'horario',
  //       'update',
  //       wasa
  //     ]
  //   );
  // }
  ngOnInit(): void {
    this.getEspecialistas();
  }

}
