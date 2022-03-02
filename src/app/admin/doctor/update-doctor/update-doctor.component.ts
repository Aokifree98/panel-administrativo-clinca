import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { Genero } from 'src/app/models/genero.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
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
    Code: '',
    Condition: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
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
  // tslint:disable-next-line: typedef
  updateDoctor() {
    const params = this.activatedRoute.snapshot.params;
    this.doctorService.updateDoctor(params.id, this.doctor).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'doctor',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del doctor');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id).subscribe(
        res => {
          console.log(res);
          this.doctor = res;
        },
        err => console.log(err)
      );
    }
  }

}
