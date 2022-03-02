import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-view-empresa',
  templateUrl: './view-empresa.component.html',
  styleUrls: ['./view-empresa.component.css']
})
export class ViewEmpresaComponent implements OnInit {
  empresa: Empresa = {
    id: 0,
    Name: '',
    BusinessName: '',
    Address: '',
    Email: '',
    Phone: '',
    Phone2: '',
    Logo: '',
    History: '',
    Mision: '',
    Vision: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private empresaService: EmpresaService,
  ) { }

  // tslint:disable-next-line: typedef
  editar() {
    this.router.navigate(
      [
        'admin',
        'empresa',
        'update'
      ]
    );
  }

  ngOnInit(): void {
    const codigo = '1';
    if (codigo) {
      this.empresaService.getEmpresa(codigo).subscribe(
        res => {
          console.log(res);
          this.empresa = res;
        },
        err => console.log(err)
      );
    }
  }

}
