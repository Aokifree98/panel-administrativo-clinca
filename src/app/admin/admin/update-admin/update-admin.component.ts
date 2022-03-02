import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  laurlimagen;
  datosimagen: any = [];
  admin: Admin = {
    id: 0,
    Name: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '',
    Condition: '',
    ConditionMin: '',
    Photo: '',
    Code: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService,
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
        this.admin.Photo = this.laurlimagen;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  updateAdmin() {
    const params = this.activatedRoute.snapshot.params;
    this.adminService.updateAdmin(params.id, this.admin).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'admin',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del admin');
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
      this.adminService.getAdmin(params.id).subscribe(
        res => {
          console.log(res);
          this.admin = res;
        },
        err => console.log(err)
      );
    }
  }

}
