import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Antecedente } from 'src/app/models/antecedente';
import { TipoService } from 'src/app/services/tipo.service';
import { ListAntecedente } from 'src/app/models/listantecedente';
import { AntecedenteService } from 'src/app/services/antecedente.service';

@Component({
  selector: 'app-update-antecedente',
  templateUrl: './update-antecedente.component.html',
  styleUrls: ['./update-antecedente.component.css']
})
export class UpdateAntecedenteComponent implements OnInit {
  codigotipo;
  tipos: any = [];
  antecedente: ListAntecedente = {
    id: 0,
    Name: '',
    TipoId: 0
  }
  antecedente1: Antecedente = {
    id: 0,
    Name: '',
    TipoId: 0,
    tipo: {
      id: 0,
      Name: '',
    }
  }
  ladata: any = this.antecedente1;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private activatedRoute: ActivatedRoute,
    private antecedenteService: AntecedenteService,
  ) { }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedTipe(event) {
    const value = event.target.value;
    this.antecedente.TipoId = value;
    console.log(value);
  }
  updateAntecedente() {
    const params = this.activatedRoute.snapshot.params;
    this.antecedenteService.updateAntecedente(params.id, this.antecedente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'antecedente',
            'list'
          ]
        );
        this.toastr.success('actualizando los datos del antecedente');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar');
      }
    );
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.antecedenteService.getAntecedente(params.id).subscribe(
        res => {
          console.log(res);
          this.antecedente = res;
        },
        err => console.log(err)
      );
    }
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'antecendente',
        'list'
      ]
    );
  }

}
