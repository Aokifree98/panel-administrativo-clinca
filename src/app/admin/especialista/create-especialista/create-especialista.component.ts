import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Especialidad } from 'src/app/models/especialidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ListEspecialista } from 'src/app/models/listespecialista';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-create-especialista',
  templateUrl: './create-especialista.component.html',
  styleUrls: ['./create-especialista.component.css']
})
export class CreateEspecialistaComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  datosimagen: any = [];
  laurlimagen;
  @ViewChild('file2') fileimagen2;
  datosimagen2: any = [];
  cargoimagen2 = false;
  laurlimagen2;
  @ViewChild('file3') fileicono;
  datosiconon: any = [];
  cargoicono = false;
  laurlicono;
  doctores: any = [];
  especialidades: any = [];
  doctor: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '999999999',
    Condition: 'desactivado'
  };
  doctor1: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '999999999',
    Condition: 'desactivado'
  };
  especialidad: Especialidad = {
    id: 0,
    Name: '',
    Resume: '',
    Image: '',
    Icon: '',
    Price: 0
  };
  especialidad1: Especialidad = {
    id: 0,
    Name: '',
    Resume: '',
    Image: '',
    Icon: '',
    Price: 0
  };
  especialista: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
  };
  especialista1: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
  };
  codigodoctor = 0;
  codigoespecialidad = 0;
  doctorbuscar = true;
  doctorcreate = false;
  resultadodoctor = false;
  especialidadbuscar = true;
  especialidadcreate = false;
  resultadoespecialidad = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private photoService: ProfileUploadService,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
  ) { }
  crear1() {
    this.doctorcreate = true;
    this.doctorbuscar = false;
    this.resultadodoctor = false;
  }
  crear2() {
    this.especialidadcreate = true;
    this.especialidadbuscar = false;
    this.resultadoespecialidad = false;
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedEspecialidad(event) {
    const value = event.target.value;
    this.codigoespecialidad = value;
    this.especialidadService.getEspecialidad(this.codigoespecialidad.toString()).subscribe(
      resespecialidad => {
        this.especialidad1 = resespecialidad;
        this.toastr.info('Especialidad elegida');
        this.resultadoespecialidad = true;
        this.especialidadbuscar = false;
        this.especialidadcreate = false;
      }, err => {
        this.toastr.error('Error Api get especialidad');
      }
    );
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  onOptionsSelecteDoctor(event) {
    const value = event.target.value;
    this.codigodoctor = value;
    this.doctorService.getDoctor(this.codigodoctor.toString()).subscribe(
      resdoctor => {
        this.doctor1 = resdoctor;
        this.toastr.info('Doctor elegido');
        this.resultadodoctor = true;
        this.doctorbuscar = false;
        this.doctorcreate = false;
      }, err => {
        this.toastr.error('Error Api get Doctor');
      }
    );

    console.log(value);
  }
  // tslint:disable-next-line: typedef
  changeImg() {
    this.fileimagen.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImg2() {
    this.fileimagen2.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeIco() {
    this.fileicono.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImagen() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadfoto(files[0], 'foto').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.doctor.Photo = this.laurlimagen;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeImagen2() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen2.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadimage(files[0], 'image').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen2 = resimage;
        this.laurlimagen2 = this.datosimagen2.data.url;
        console.log(this.laurlimagen2);
        this.especialidad.Image = this.laurlimagen2;
        this.cargoimagen2 = true;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeIcono() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileicono.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadicono(files[0], 'icono').subscribe(
      (resico) => {
        console.log(resico);
        this.datosiconon = resico;
        this.laurlicono = this.datosiconon.data.url;
        console.log(this.laurlicono);
        this.especialidad.Icon = this.laurlicono;
        this.cargoicono = true;

      },
      console.error,
    );
  }
  getdoctors() {
    this.doctorService.getDoctors().subscribe(
      res => {
        this.doctores = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getespecialidades() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidades = res;
        console.log(res);

      },
      err => {
        console.error(err);
      }
    );
  }
  // creando metodo para crear un nuevo doctor
  // tslint:disable-next-line: typedef
  saveDoctor() {
    delete this.doctor.id;
    this.doctor.Password = this.doctor.MedicalSchoolNumber;
    console.log(this.doctor);
    // llamando a servicio de creacion que esta enlazada con el api
    this.doctorService.saveDoctor(this.doctor).subscribe(
      res => {
        this.doctor1 = res;
        this.codigodoctor = this.doctor1.id;
        this.especialista.DoctorId = this.codigodoctor;
        console.log(res);
        this.toastr.success('Nuevo doctor creado');
        this.resultadodoctor = true;
        this.doctorcreate = false;
        this.doctorbuscar = false;
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo doctor');
      }
    );
  }
  saveEspecialidad() {
    delete this.especialidad.id;
    console.log(this.especialidad);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialidadService.saveEspecialidad(this.especialidad).subscribe(
      res => {
        this.especialidad1 = res;
        this.codigoespecialidad = this.especialidad1.id;
        this.especialista.EspecialidadId = this.codigoespecialidad;
        console.log(res);
        this.toastr.success('Nuevo especialidad creado');
        this.resultadoespecialidad = true;
        this.especialidadcreate = false;
        this.especialidadbuscar = false;
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo especialidad');
      }
    );
  }
  saveEspecialista() {
    this.especialista.EspecialidadId = this.codigoespecialidad;
    this.especialista.DoctorId = this.codigodoctor;
    delete this.especialista.id;
    console.log(this.especialista);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialistaService.saveEspecialista(this.especialista).subscribe(
      res => {
        console.log(res);

        this.toastr.success('Nuevo especialista creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo especialista');
      }
    );
  }
  ngOnInit(): void {
    this.getdoctors();
    this.getespecialidades();
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'especialista',
        'list'
      ]
    );
  }
}
