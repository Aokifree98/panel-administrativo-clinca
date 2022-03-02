import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parametro = {
    usuario: '',
    contra: ''
  };
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
    private adminService: AdminService
  ) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    console.log(this.parametro);
    const parametro1 = this.parametro.usuario;
    const parametro2 = this.parametro.contra;
    console.log(parametro1);
    console.log(parametro2);
    this.adminService.getlogin(parametro1, parametro2).subscribe(res => {
      if (res) {
        this.adminService.loggin(res);
        this.toastr.success('Bienvenido Admin');
      } else {
        this.toastr.error('Usuario y Contraseña incorrecto');
      }
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line: typedef
  recover() {
    this.toastr.info(
      'Confirmar correo para recuperar Contraseña'
    );
    this.router.navigate(
      [
        'auth',
        'recover'
      ]
    );
  }
}
