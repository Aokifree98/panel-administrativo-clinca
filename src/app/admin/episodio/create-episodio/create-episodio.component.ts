import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Episodio } from 'src/app/models/episodio';
import { EpisodioService } from 'src/app/services/episodio.service';

@Component({
  selector: 'app-create-episodio',
  templateUrl: './create-episodio.component.html',
  styleUrls: ['./create-episodio.component.css']
})
export class CreateEpisodioComponent implements OnInit {
  episodio: Episodio = {
    id: 0,
    Name: '',
    Detail: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private episodioService: EpisodioService,
  ) { }
  saveEpisodio() {
    delete this.episodio.id;
    console.log(this.episodio);
    // llamando a servicio de creacion que esta enlazada con el api
    this.episodioService.saveEpisodio(this.episodio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'episodio',
            'list'
          ]
        );
        this.toastr.success('Nuevo episodio creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo episodio');
      }
    );
  }
  ngOnInit(): void {
  }

}
