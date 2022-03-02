import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-list-contacto',
  templateUrl: './list-contacto.component.html',
  styleUrls: ['./list-contacto.component.css']
})
export class ListContactoComponent implements OnInit {
  contactos: any = [];
  resultado;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  // tslint:disable-next-line: typedef
  getAdmins() {
    this.contactoService.getContactos().subscribe(
      res => {
        this.contactos = res;
      },
      err => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  // tslint:disable-next-line: typedef
  eliminar(codigo) {
    console.log(codigo);
    const codigoaeliminar = codigo;
    this.contactoService.deleteContacto(codigoaeliminar).subscribe(
      res => {
        if (res) {
          this.resultado = res;
          this.router.navigate(
            [
              'admin',
              'contacto'
            ]
          );
          this.toastr.success('contacto eliminado');
        } else {
          this.toastr.error('no se pudo eliminar');
        }
      }
    )
  }

}
