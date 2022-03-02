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
  especialidad: Especialidad = {
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
  codigodoctor;
  codigoespecialidad;
  doctorcreate = false;
  especialidadcreate = false;
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
  }
  crear2() {
    this.especialidadcreate = true;
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedEspecialidad(event) {
    const value = event.target.value;
    this.codigoespecialidad = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  onOptionsSelecteDoctor(event) {
    const value = event.target.value;
    this.codigodoctor = value;
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
    this.photoService.uploadservicio(files[0], 'Imagen').subscribe(
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
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadservicio(files[0], 'Icono').subscribe(
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
    console.log(this.doctor);
    // llamando a servicio de creacion que esta enlazada con el api
    this.doctorService.saveDoctor(this.doctor).subscribe(
      res => {
        this.doctor = res;
        this.codigodoctor = this.doctor.id;
        this.especialista.DoctorId = this.codigodoctor;
        console.log(res);
        this.toastr.success('Nuevo doctor creado');
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
        this.especialidad = res;
        this.codigoespecialidad = this.especialidad.id;
        this.especialista.EspecialidadId = this.codigoespecialidad;
        console.log(res);
        this.toastr.success('Nuevo especialidad creado');
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
    delete this.especialidad.id;
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
    this.especialidades();
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
