import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  laurlimagen;
  datosimagen: any = [];
  // declarando los datos del admin
  admin: Admin = {
    id: 0,
    Name: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '123',
    Condition: 'secretaria',
    ConditionMin: 'desactivado',
    Photo: 'https://st.depositphotos.com/2704315/3185/v/600/depositphotos_31854223-stock-illustration-vector-user-profile-avatar-man.jpg',
    Code: '9999999'
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
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
        this.admin.Photo = this.laurlimagen;
      },
      console.error,
    );
  }
  // creando metodo para crear un nuevo admin
  // tslint:disable-next-line: typedef
  saveAdmin() {
    delete this.admin.id;
    console.log(this.admin);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.adminService.saveAdmin(this.admin).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'admin',
            'list'
          ]
        );
        this.toastr.success('Nuevo admin creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo admin');
      }
    );
  }
  ngOnInit(): void {
  }

}
