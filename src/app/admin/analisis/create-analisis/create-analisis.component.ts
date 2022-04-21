import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tipo } from 'src/app/models/tipo';
import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/models/laboratorio';
import { TipoService } from 'src/app/services/tipo.service';
import { ListLaboratorio } from 'src/app/models/listlaboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-create-analisis',
  templateUrl: './create-analisis.component.html',
  styleUrls: ['./create-analisis.component.css']
})
export class CreateAnalisisComponent implements OnInit {
  tipo: Tipo = {
    id: 0,
    Name: ''
  };
  tipo1: Tipo = {
    id: 0,
    Name: ''
  };
  laboratorio: ListLaboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0,
    TipoId: 0
  };
  laboratorio1: ListLaboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0,
    TipoId: 0
  };
  laboratoriodetail: Laboratorio = {
    id: 0,
    Name: '',
    Detail: '',
    Price: 0,
    TipoId: 0,
    tipo: {
      id: 0,
      Name: '',
    }
  };
  ladata: any = this.laboratoriodetail;
  bandera;
  tipos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private laboratorioService: LaboratorioService,
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
  onOptionsSelectedTipe(event) {
    const value = event.target.value;
    this.laboratorio.TipoId = value;
    console.log(value);
    this.tipoService.getTipo(value).subscribe(
      res => {
        this.tipo1 = res;
        this.bandera = 'elegido';
      }, err => {
        this.toastr.error('Error Api');
      }
    );
  }
  crear() {
    this.bandera = 'crear';
  }
  saveTipo() {
    delete this.tipo.id;
    this.tipoService.saveTipo(this.tipo).subscribe(
      res => {
        this.tipo1 = res;
      }, err => {
        this.toastr.error('Error Api');
        this.bandera = 'elegido';
      }
    );
  }
  saveLaboratorio() {
    delete this.laboratorio.id;
    console.log(this.laboratorio);
    // llamando a laboratorio de creacion que esta enlazada con el api
    this.laboratorioService.saveLaboratorio(this.laboratorio).subscribe(
      res => {
        this.laboratorio1 = res;
        this.ladata = res;
        console.log(res);
        this.bandera = 'elegir';
        this.toastr.success('Nuevo analisis creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo analisis');
      }
    );
  }
  ngOnInit(): void {
    this.bandera = 'elegir';
    this.gettipos();
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'analisis',
        'list'
      ]
    );
  }
}
