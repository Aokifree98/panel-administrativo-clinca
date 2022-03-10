import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-list-especialista',
  templateUrl: './list-especialista.component.html',
  styleUrls: ['./list-especialista.component.css']
})
export class ListEspecialistaComponent implements OnInit {
  especialistas: any = [];
  doctores: any = [];
  bandera = false;
  codigodoctor = 0;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private especialistaService: EspecialistaService,
  ) { }

  ngOnInit(): void {
    this.getdoctores();
    // this.getespecialistas();
  }
  ver(codigo) {
    this.codigodoctor = codigo;
    this.especialistaService.getEspecialistaFilterDoctor(codigo).subscribe(
      res => {
        this.especialistas = res;
        this.toastr.success('Especialidades del Doctor');
      }, err => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  getdoctores() {
    this.doctorService.getDoctors().subscribe(
      res => {
        this.doctores = res;
        console.log(res);
        this.toastr.success('Doctores');
      }, err => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'especialista',
        'create'
      ]
    );
  }
  add(codigo) {
    console.log(codigo);
    const codigoadd = codigo;
    this.toastr.info('Agregar nueva especialidad');
    this.router.navigate(
      [
        'admin',
        'especialista',
        'add',
        codigoadd
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Especialista');
    this.router.navigate(
      [
        'admin',
        'especialista',
        'update',
        codigoaeditar
      ]
    );
  }
  editardoctor(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Doctor');
    this.router.navigate(
      [
        'admin',
        'especialista',
        'doctor-edit',
        codigoaeditar
      ]
    );
  }

}
