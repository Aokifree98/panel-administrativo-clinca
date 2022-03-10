import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/models/especialidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ListEspecialista } from 'src/app/models/listespecialista';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-add-especialista',
  templateUrl: './add-especialista.component.html',
  styleUrls: ['./add-especialista.component.css']
})
export class AddEspecialistaComponent implements OnInit {
  @ViewChild('file2') fileimagen2;
  datosimagen2: any = [];
  cargoimagen2 = false;
  laurlimagen2;
  @ViewChild('file3') fileicono;
  datosiconon: any = [];
  cargoicono = false;
  laurlicono;
  especialidades: any = [];
  doctor: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '',
    Condition: ''
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
  especialidadbuscar = true;
  especialidadcreate = false;
  resultadoespecialidad = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private photoService: ProfileUploadService,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
  ) { }
  crear2() {
    this.especialidadcreate = true;
    this.especialidadbuscar = false;
    this.resultadoespecialidad = false;
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedEspecialidad(event) {
    const value = event.target.value;
    this.codigoespecialidad = value;
    console.log(value);
  }
  changeImg2() {
    this.fileimagen2.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeIco() {
    this.fileicono.nativeElement.click();
  }
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
    const files: { [key: string]: File } = this.fileicono.nativeElement.files;
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
    this.getespecialidades();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id).subscribe(
        res => {
          console.log(res);
          this.doctor = res;
          this.codigodoctor = this.doctor.id;
        },
        err => {
          console.log(err);
        }
      );
    }
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
