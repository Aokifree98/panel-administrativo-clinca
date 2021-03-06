import { ToastrService } from 'ngx-toastr';
import { Valor } from 'src/app/models/valor';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ValorService } from 'src/app/services/valor.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-valor',
  templateUrl: './update-valor.component.html',
  styleUrls: ['./update-valor.component.css']
})
export class UpdateValorComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  laurlimagen;
  datosimagen: any = [];
  cargoimagen = false;
  // declarando los datos del admin
  valor: Valor = {
    id: 0,
    Name: '',
    Detail: '',
    Image: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private valorService: ValorService,
    private photoService: ProfileUploadService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.valorService.getValor(params.id).subscribe(
        res => {
          console.log(res);
          this.valor = res;
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
    this.photoService.uploadfoto(files[0], 'valor').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.valor.Image = this.laurlimagen;
        this.cargoimagen = true;
      },
      console.error,
    );
  }
  updateValor() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.valor);
    // llamando a servicio de creacion que esta enlazada con el api
    this.valorService.updateValor(params.id, this.valor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'valor',
            'list'
          ]
        );
        this.toastr.success('valor actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar valor');
      }
    );
  }

}
