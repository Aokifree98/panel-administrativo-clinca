import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientoService } from 'src/app/services/tratamiento.service';

@Component({
  selector: 'app-update-tratamiento',
  templateUrl: './update-tratamiento.component.html',
  styleUrls: ['./update-tratamiento.component.css']
})
export class UpdateTratamientoComponent implements OnInit {
  tratamiento: Tratamiento = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tratamientoService: TratamientoService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.tratamientoService.getTratamiento(params.id).subscribe(
        res => {
          console.log(res);
          this.tratamiento = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateTratamiento() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.tratamiento);
    // llamando a servicio de creacion que esta enlazada con el api
    this.tratamientoService.updateTratamiento(params.id, this.tratamiento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'tratamiento',
            'list'
          ]
        );
        this.toastr.success('Nuevo tratamiento creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo tratamiento');
      }
    );
  }

}
