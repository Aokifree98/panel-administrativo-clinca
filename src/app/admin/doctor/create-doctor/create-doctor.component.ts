import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Genero } from 'src/app/models/genero.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  datosimagen: any = [];
  laurlimagen;
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
  }
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private photoService: ProfileUploadService,
  ) { }
  // tslint:disable-next-line: typedef
  changeImg() {
    this.fileimagen.nativeElement.click();
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
  // creando metodo para crear un nuevo doctor
  // tslint:disable-next-line: typedef
  saveDoctor() {
    delete this.doctor.id;
    this.doctor.Password = this.doctor.MedicalSchoolNumber;
    console.log(this.doctor);
    // llamando a servicio de creacion que esta enlazada con el api
    this.doctorService.saveDoctor(this.doctor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'doctor',
            'list'
          ]
        );
        this.toastr.success('Nuevo doctor creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo doctor');
      }
    );
  }
  ngOnInit(): void {
  }

}
