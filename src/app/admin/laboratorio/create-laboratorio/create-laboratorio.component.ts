import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/models/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-create-laboratorio',
  templateUrl: './create-laboratorio.component.html',
  styleUrls: ['./create-laboratorio.component.css']
})
export class CreateLaboratorioComponent implements OnInit {
  laboratorio: Laboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0
  }
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private laboratorioService: LaboratorioService,
  ) { }
  saveLaboratorio() {
    delete this.laboratorio.id;
    console.log(this.laboratorio);
    // llamando a laboratorio de creacion que esta enlazada con el api
    this.laboratorioService.saveLaboratorio(this.laboratorio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'laboratorio',
            'list'
          ]
        );
        this.toastr.success('Nuevo laboratorio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo laboratorio');
      }
    );
  }
  ngOnInit(): void {
  }

}
