import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tipo } from 'src/app/models/tipo';
import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/services/tipo.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-list-analisis',
  templateUrl: './list-analisis.component.html',
  styleUrls: ['./list-analisis.component.css']
})
export class ListAnalisisComponent implements OnInit {
  laboratorios: any = [];
  tipos: any = [];
  bandera = false;
  tipo: Tipo = {
    id: 0,
    Name: ''
  };
  mensaje;
  mensaje1;
  codigotipo;
  parametrito;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private laboratorioService: LaboratorioService
  ) { }
  ngOnInit(): void {
    // this.getlaboratorios();
    this.gettipos();
  }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos = res;
      }, err => {
        this.toastr.error('Error Api tipo');
      }
    );
  }
  ver(codigo) {
    const parametro = codigo;
    this.codigotipo = codigo;
    this.laboratorioService.getLaboratorioTipo(parametro).subscribe(
      res => {
        this.laboratorios = res;
      },
      err => {
        this.toastr.error('Error Api List analisis del Tipo');
      }
    );
  }
  updateTipo() {
    // llamando a laboratorio de creacion que esta enlazada con el api
    this.tipoService.updateTipo(this.codigotipo, this.tipo).subscribe(
      res => {
        console.log(res);
        this.mensaje = res;
        this.toastr.success('Tipo actualizado');
        this.bandera = false;
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar tipo');
      }
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'analisis',
        'create'
      ]
    );
  }
  edit(codigo) {
    this.bandera = true;
    this.codigotipo = codigo;
    this.tipoService.getTipo(codigo).subscribe(
      res => {
        this.tipo = res;
      }, err => {
        this.toastr.error('Error api tipo get');
      }
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Tipo');
    this.router.navigate(
      [
        'admin',
        'analisis',
        'update',
        codigoaeditar
      ]
    );
  }
  delete(codigo) {
    this.parametrito = codigo;
    this.laboratorioService.getLaboratorioTipo(this.parametrito).subscribe(
      reslist => {
        this.laboratorios = reslist;
        console.log(this.laboratorios);
        const numero = Object.entries(this.laboratorios).length;
        console.log(numero);
        if (numero > 0) {
          this.laboratorioService.getLaboratorioTipo(this.parametrito).subscribe(
            resdeletelabs => {
              this.mensaje = resdeletelabs;
              this.toastr.info('analisis de Tipo Eliminados');
              this.tipoService.deleteTipo(this.parametrito).subscribe(
                resdeletetipo => {
                  this.mensaje1 = resdeletetipo;
                  this.toastr.info('Tipo Eliminado');
                  window.location.reload();
                }, err => {
                  this.toastr.error('Error Api Delete Tipo');
                }
              );
            }, err => {
              this.toastr.error('Error Api Delete analisis Tipo');
            }
          );
        } else if (numero === 0) {
          this.tipoService.deleteTipo(this.parametrito).subscribe(
            resdeletetipo => {
              this.mensaje1 = resdeletetipo;
              this.toastr.info('Tipo Eliminado');
              window.location.reload();
            }, err => {
              this.toastr.error('Error Api Delete Tipo');
            }
          );
        }
      },
      err => {
        this.toastr.error('Error Api List analisis del Tipo');
      }
    );
  }
  agregar(codigo) {
    console.log(codigo);
    const codigotipo = codigo;
    this.toastr.info('Agregar nuevo Examen');
    this.router.navigate(
      [
        'admin',
        'analisis',
        'add',
        codigotipo
      ]
    );
  }
  deletelab(codigo) {
    this.laboratorioService.deleteLaboratorio(codigo).subscribe(
      resdeletelab => {
        this.mensaje = resdeletelab;
        console.log(resdeletelab);
        window.location.reload();
      }
    );
  }
  cancelar() {
    window.location.reload();
  }
}
