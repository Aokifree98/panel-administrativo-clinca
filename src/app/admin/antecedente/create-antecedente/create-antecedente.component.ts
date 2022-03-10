// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
// import { Antecedente } from 'src/app/models/antecedente';
// import { TipoService } from 'src/app/services/tipo.service';
// import { ListAntecedente } from 'src/app/models/listantecedente';
// import { AntecedenteService } from 'src/app/services/antecedente.service';

@Component({
  selector: 'app-create-antecedente',
  templateUrl: './create-antecedente.component.html',
  styleUrls: ['./create-antecedente.component.css']
})
export class CreateAntecedenteComponent implements OnInit {
  // codigotipo;
  // tipos: any = [];
  // antecedente: ListAntecedente = {
  //   id: 0,
  //   Name: '',
  //   TipoId: 0
  // }
  // antecedente1: Antecedente = {
  //   id: 0,
  //   Name: '',
  //   TipoId: 0,
  //   tipo: {
  //     id: 0,
  //     Name: '',
  //   }
  // }
  // ladata: any = this.antecedente1;
  constructor(
    // private router: Router,
    // private toastr: ToastrService,
    // private tipoService: TipoService,
    // private antecendenteService: AntecedenteService,
  ) { }
  // gettipos() {
  //   this.tipoService.getTipos().subscribe(
  //     res => {
  //       this.tipos = res;
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  // }
  // // tslint:disable-next-line: typedef
  // onOptionsSelectedTipe(event) {
  //   const value = event.target.value;
  //   this.antecedente.TipoId = value;
  //   console.log(value);
  // }
  // saveAntecendente() {
  //   delete this.antecedente.id;
  //   console.log(this.antecedente);
  //   this.antecendenteService.saveAntecedente(this.antecedente).subscribe(
  //     res => {
  //       this.ladata = res;
  //       this.toastr.success('Nuevo antecendente creado');
  //     },
  //     err => {
  //       console.error(err);
  //       this.toastr.error('no se pudo crear un nuevo antecendente');
  //     }
  //   );
  // }
  // finish() {
  //   this.router.navigate(
  //     [
  //       'admin',
  //       'antecendente',
  //       'list'
  //     ]
  //   );
  // }
  ngOnInit(): void {
  }

}
