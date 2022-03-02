import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Objetivo } from 'src/app/models/objetivo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ObjetivoService } from 'src/app/services/objetivo.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-create-objetivo',
  templateUrl: './create-objetivo.component.html',
  styleUrls: ['./create-objetivo.component.css']
})
export class CreateObjetivoComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  laurlimagen;
  datosimagen: any = [];
  cargoimagen = false;
  // declarando los datos del objetivo
  objetivo: Objetivo = {
    id: 0,
    Title: '',
    Detail: '',
    Image: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private objetivoService: ObjetivoService,
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
    this.photoService.uploadobjetivo(files[0], 'Objetivo').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.objetivo.Image = this.laurlimagen;
        this.cargoimagen = true;
      },
      console.error,
    );
  }
  saveObjetivo() {
    delete this.objetivo.id;
    console.log(this.objetivo);
    // llamando a servicio de creacion que esta enlazada con el api
    this.objetivoService.saveObjetivo(this.objetivo).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'objetivo',
            'list'
          ]
        );
        this.toastr.success('Nuevo objetivo creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo objetivo');
      }
    );
  }
  ngOnInit(): void {
  }

}
