import { navItems } from './_nav';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public sidebarColor = 'red';
  client;
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
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  public parametrodeimagen = 0;
  wasa = '../assets/img/sidebar-5.jpg';
  raiz = '../assets/img/';
  fondo1 = this.raiz + 'sidebar-1.jpg';
  fondo2 = this.raiz + 'sidebar-2.jpg';
  fondo3 = this.raiz + 'sidebar-3.jpg';
  fondo4 = this.raiz + 'sidebar-4.jpg';
  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }
  cambiarimagen(param) {
    this.parametrodeimagen = param;
    switch (this.parametrodeimagen) {
      case 1:
        this.wasa = this.fondo1;
        break;
      case 2:
        this.wasa = this.fondo2;
        break;
      case 3:
        this.wasa = this.fondo3;
        break;
      case 4:
        this.wasa = this.fondo4;
        break;
      default:
        this.wasa = '../assets/img/sidebar-5.jpg';
        break;
    }
  }

  loggout() {
    this.adminService.loggout();
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }
  ngOnInit(): void {
    if (this.adminService.isLoggedIn()) {
      this.client = JSON.parse(localStorage.getItem('admin'));
      this.admin = JSON.parse(localStorage.getItem('admin'));
      // this.router.navigate(
      //   [
      //     'admin',
      //     'home'
      //   ]
      // );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  }

}
