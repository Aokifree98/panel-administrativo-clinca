import { ToastrService } from 'ngx-toastr';
import { Numero } from 'src/app/models/numero';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NumeroService } from 'src/app/services/numero.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-numero',
  templateUrl: './update-numero.component.html',
  styleUrls: ['./update-numero.component.css']
})
export class UpdateNumeroComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  laurlimagen;
  datosimagen: any = [];
  cargoimagen = false;
  numero: Numero = {
    id: 0,
    Name: '',
    Image: '',
    Count: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private numeroService: NumeroService,
    private activatedRoute: ActivatedRoute,
    private photoService: ProfileUploadService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.numeroService.getNumero(params.id).subscribe(
        res => {
          console.log(res);
          this.numero = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
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
    this.photoService.uploadnumero(files[0], 'Numero').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.numero.Image = this.laurlimagen;
        this.cargoimagen = true;
      },
      console.error,
    );
  }
  updateNumero() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.numero);
    // llamando a servicio de creacion que esta enlazada con el api
    this.numeroService.updateNumero(params.id, this.numero).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'numero',
            'list'
          ]
        );
        this.toastr.success('numero Actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar numero');
      }
    );
  }
}
