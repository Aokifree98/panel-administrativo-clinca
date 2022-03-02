import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Politica } from 'src/app/models/politica';
import { PoliticaService } from 'src/app/services/politica.service';

@Component({
  selector: 'app-create-politica',
  templateUrl: './create-politica.component.html',
  styleUrls: ['./create-politica.component.css']
})
export class CreatePoliticaComponent implements OnInit {
  politica: Politica = {
    id: 0,
    Name: '',
    Detail: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private politicaService: PoliticaService,
  ) { }
  savePolitica() {
    delete this.politica.id;
    console.log(this.politica);
    // llamando a servicio de creacion que esta enlazada con el api
    this.politicaService.savePolitica(this.politica).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'politica',
            'list'
          ]
        );
        this.toastr.success('Nuevo politica creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo politica');
      }
    );
  }
  ngOnInit(): void {
  }

}
