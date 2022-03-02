import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-list-banner',
  templateUrl: './list-banner.component.html',
  styleUrls: ['./list-banner.component.css']
})
export class ListBannerComponent implements OnInit {
  banners: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.getBanners();
  }

  // tslint:disable-next-line: typedef
  getBanners() {
    this.bannerService.getBanners().subscribe(
      res => {
        this.banners = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'banner',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Banner');
    this.router.navigate(
      [
        'admin',
        'banner',
        'update',
        codigoaeditar
      ]
    );
  }

}
