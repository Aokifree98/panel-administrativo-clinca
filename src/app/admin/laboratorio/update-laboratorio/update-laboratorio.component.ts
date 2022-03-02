import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Laboratorio } from 'src/app/models/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-update-laboratorio',
  templateUrl: './update-laboratorio.component.html',
  styleUrls: ['./update-laboratorio.component.css']
})
export class UpdateLaboratorioComponent implements OnInit {
  laboratorio: Laboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0
  }
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private laboratorioService: LaboratorioService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.laboratorioService.getLaboratorio(params.id).subscribe(
        res => {
          console.log(res);
          this.laboratorio = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateLaboratorio() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.laboratorio);
    // llamando a laboratorio de creacion que esta enlazada con el api
    this.laboratorioService.updateLaboratorio(params.id, this.laboratorio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'laboratorio',
            'list'
          ]
        );
        this.toastr.success('laboratorio actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar laboratorio');
      }
    );
  }

}
