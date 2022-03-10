import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    Name: '',
    LastName: '',
    BirthDate: new Date(),
    Job: '',
    Direction: '',
    Phone: '',
    Gender: '',
    CivilStatus: '',
    DocumentNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Google: '0',
    Condition: '',
    Code: ''
  };
  genero: Genero [] = [
    {
      id: 1,
      name: 'Masculino'
    },
    {
      id: 2,
      name: 'Femenino'
    }
  ];
  estadocivil: Genero [] = [
    {
      id: 1,
      name: 'Soltero'
    },
    {
      id: 2,
      name: 'Casado'
    },
    {
      id: 3,
      name: 'Divorciado'
    },
    {
      id: 4,
      name: 'Viudo'
    },
    {
      id: 5,
      name: 'Concubinato'
    },
    {
      id: 6,
      name: 'Separación en proceso'
    },
    {
      id: 7,
      name: 'Separado'
    }
  ];
  lafecha: Date;
  fechamin: Date;
  fechamax: Date;
  stringmax;
  stringmin;
  stringfecha;
  nuevafecha: Date;
  constructor(
    private pd: DatePipe,
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }
  cambio(event) {
    console.log(event);
    this.cliente.BirthDate = event;
  }
  // tslint:disable-next-line: typedef
  onOptionsSelected(event) {
    const value = event.target.value;
    this.cliente.Gender = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
  onOptionsSelectedStatus(event) {
    const value = event.target.value;
    this.cliente.CivilStatus = value;
    console.log(value);
  }
  updateCliente() {
    const params = this.activatedRoute.snapshot.params;
    this.clienteService.updateCliente(params.id, this.cliente).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'cliente',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del cliente');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
  ngOnInit(): void {
    this.fechamin = new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate());
    this.fechamax = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    this.stringmin = this.pd.transform(this.fechamin, 'yyyy-MM-dd');
    this.stringmax = this.pd.transform(this.fechamax, 'yyyy-MM-dd');
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.clienteService.getCliente(params.id).subscribe(
        res => {
          console.log(res);
          this.cliente = res;
          const fecha: Date = this.cliente.BirthDate;
          const dia = new Date(fecha).getDate() + 1;
          const mes = new Date(fecha).getMonth();
          const anio = new Date(fecha).getFullYear();
          this.lafecha = new Date(anio, mes, dia);
          this.stringfecha = this.pd.transform(this.lafecha, 'yyyy-MM-dd');
          console.log(this.stringfecha);
        },
        err => console.log(err)
      );
    }
  }
}
