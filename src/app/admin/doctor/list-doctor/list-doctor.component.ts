import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  doctors: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.getdoctors();
  }
  // tslint:disable-next-line: typedef
  getdoctors() {
    this.doctorService.getDoctors().subscribe(
      res => {
        this.doctors = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'doctor',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar doctor');
    this.router.navigate(
      [
        'admin',
        'doctor',
        'update',
        codigoaeditar
      ]
    );
  }

}
