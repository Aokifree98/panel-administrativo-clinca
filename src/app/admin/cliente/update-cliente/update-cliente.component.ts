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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }
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
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.clienteService.getCliente(params.id).subscribe(
        res => {
          console.log(res);
          this.cliente = res;
        },
        err => console.log(err)
      );
    }
  }
}
