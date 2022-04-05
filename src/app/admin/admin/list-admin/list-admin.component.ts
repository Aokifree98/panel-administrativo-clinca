import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  admins: any = [];
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  // tslint:disable-next-line: typedef
  getAdmins() {
    this.adminService.getAdmins().subscribe(
      res => {
        this.admins = res;
      },
      err => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'admin',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Admin');
    this.router.navigate(
      [
        'admin',
        'admin',
        'update',
        codigoaeditar
      ]
    );
  }
  eliminar(codigo) {
    if (confirm('¿Estas seguro de eliminar usuario? - eliminaras tambien sus citas registradas y por ende tambien las historias'))
    {
      console.log('Desidio eliminar usuario');
      this.adminService.deleteAdmin(codigo).subscribe(
        res => {
          this.mensaje = res;
          this.toastr.info('Usuario y sus citas registradas elimiadas');
          window.location.reload();
        }, err => {
          this.toastr.error('Error Api eliminacion de Admin');
        }
      );
    } else {
      console.log('Desidio no eliminar usuario');
    }
  }

}
