import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Testimonio } from 'src/app/models/testimonio';
import { ActivatedRoute, Router } from '@angular/router';
import { ListTestimonio } from 'src/app/models/listtest';
import { TestimonioService } from 'src/app/services/testimonio.service';

@Component({
  selector: 'app-update-testimonio',
  templateUrl: './update-testimonio.component.html',
  styleUrls: ['./update-testimonio.component.css']
})
export class UpdateTestimonioComponent implements OnInit {
  testimonio: ListTestimonio = {
    id: 0,
    Testimony: '',
    ClienteId: 0
  };
  clientestimonio : Testimonio = {
    id: 0,
    Testimony: '',
    ClienteId: 0,
    cliente: {
      id: 0,
      Name: '',
      LastName: '',
      Photo: ''
    }
  }
  ladata: any = this.clientestimonio;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private testimonioService: TestimonioService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.testimonioService.getTestimonio(params.id).subscribe(
        res => {
          console.log(res);
          this.testimonio = res;
          this.ladata = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  // tslint:disable-next-line: typedef
  updateTestimonio() {
    const params = this.activatedRoute.snapshot.params;
    this.testimonioService.updateTestimonio(params.id, this.testimonio).subscribe(
        res => {
          console.log(res);
          this.router.navigate(
            [
              'admin',
              'testimonio',
              'list'
            ]
          );
          this.toastr.success('actualizando los datos del testimonio');
        },
        err => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }

}
