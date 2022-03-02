import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    if (this.adminService.isLoggedIn()) {
      this.router.navigate(
        [
          'admin',
          'home'
        ]
      );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
    this.adminService.client$.subscribe(res => {
      if (res) {
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }
    });
  }

}
