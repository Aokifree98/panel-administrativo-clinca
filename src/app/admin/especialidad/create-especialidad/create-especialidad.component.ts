import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from 'src/app/models/especialidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-create-especialidad',
  templateUrl: './create-especialidad.component.html',
  styleUrls: ['./create-especialidad.component.css']
})
export class CreateEspecialidadComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  datosimagen: any = [];
  cargoimagen = false;
  laurlimagen;
  @ViewChild('file2') fileicono;
  datosiconon: any = [];
  cargoicono = false;
  laurlicono;
  especialidad: Especialidad = {
    id: 0,
    Name: '',
    Resume: '',
    Image: '',
    Icon: '',
    Price: 0
  }
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private photoService: ProfileUploadService,
    private especialidadService: EspecialidadService,
  ) { }
  // tslint:disable-next-line: typedef
  changeImg() {
    this.fileimagen.nativeElement.click();
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
    this.photoService.uploadservicio(files[0], 'Imagen').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.especialidad.Image = this.laurlimagen;
        this.cargoimagen = true;
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
  saveespecialidad() {
    delete this.especialidad.id;
    console.log(this.especialidad);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialidadService.saveEspecialidad(this.especialidad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'especialidad',
            'list'
          ]
        );
        this.toastr.success('Nuevo especialidad creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo especialidad');
      }
    );
  }
  ngOnInit(): void {
  }

}
