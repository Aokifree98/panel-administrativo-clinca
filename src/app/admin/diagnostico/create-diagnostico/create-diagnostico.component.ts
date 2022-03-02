import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-create-diagnostico',
  templateUrl: './create-diagnostico.component.html',
  styleUrls: ['./create-diagnostico.component.css']
})
export class CreateDiagnosticoComponent implements OnInit {
  diagnostico: Diagnostico = {
    id: 0,
    Name: '',
    Detail: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private diagnosticoService: DiagnosticoService,
  ) { }
  saveDiagnostico() {
    delete this.diagnostico.id;
    console.log(this.diagnostico);
    // llamando a servicio de creacion que esta enlazada con el api
    this.diagnosticoService.saveDiagnostico(this.diagnostico).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'diagnostico',
            'list'
          ]
        );
        this.toastr.success('Nuevo diagnostico creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo diagnostico');
      }
    );
  }
  ngOnInit(): void {
  }

}
