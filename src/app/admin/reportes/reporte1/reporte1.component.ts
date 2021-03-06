import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
  fechaminstart: Date;
  fechamaxstart: Date;
  stringmaxstart;
  stringminstart;
  fechaminend: Date;
  fechamaxend: Date;
  stringmaxend;
  stringminend;
  fechastart: Date;
  fechaend: Date;
  fechastartstring;
  fechaendstring;
  grafico = false;
  reportetablas = false;
  reporviewatencion = false;
  reporviewnovino = false;
  reporviewreserva = false;
  reporviewposterga = false;
  reportetotal: any = [];
  atencion: any = [];
  novino: any = [];
  reserva: any = [];
  postergacion: any = [];
  constructor(
    private pd: DatePipe,
    private toastr: ToastrService,
    private reporteService: ReportesService
  ) { }
  ngOnInit(): void {
    this.fechamaxstart = new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate());
    this.fechamaxend = new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate());
    this.stringmaxstart = this.pd.transform(this.fechamaxstart, 'yyyy-MM-dd');
    this.stringmaxend = this.pd.transform(this.fechamaxend, 'yyyy-MM-dd');
  }
  generar() {
    this.fechastartstring = this.fechastart.toString();
    this.fechaendstring = this.fechaend.toString();
    const filtro = new Date().toString();
    const date1 = this.fechastartstring;
    const date2 = this.fechaendstring;
    this.reportetablas = true;
    // this.reportegrafico = true;
    console.log(date1, date2, filtro);
    if (date1 === filtro || date2 === filtro) {
      this.toastr.error('por favor escoja fechas');
    } else {
      // aca va todo lo de abajo
    }
    // tslint:disable-next-line: deprecation
    this.reporteService.getconsolidado(date1, date2).subscribe(
      resreporte => {
        this.reportetotal = resreporte;
        this.atencion = this.reportetotal[0];
        this.novino = this.reportetotal[1];
        this.reserva = this.reportetotal[2];
        this.postergacion = this.reportetotal[3];
        console.log(resreporte);
        this.reportetablas = true;
        if (Object.entries(this.atencion).length > 0) {
          this.reporviewatencion = true;
        } else {
          this.reporviewatencion = false;
        }
        if (Object.entries(this.novino).length > 0) {
          this.reporviewnovino = true;
        } else {
          this.reporviewnovino = false;
        }
        if (Object.entries(this.reserva).length > 0) {
          this.reporviewreserva = true;
        } else {
          this.reporviewreserva = false;
        }
        if (Object.entries(this.postergacion).length > 0) {
          this.reporviewposterga = true;
        } else {
          this.reporviewposterga = false;
        }
        // if (res) {
        //   console.log(res);
        //   this.reporte = res;
        //   this.toastr.success('Apreciar el Reporte en tablas y en grafico');
        //   const cliente = this.reporte.map( (ele) => ele.cliente);
        //   const ingresos = this.reporte.map( (ele) => +ele.ingresos);
        //   this.datarepo = {
        //     labels: cliente,
        //     datasets: [
        //       {
        //         label: 'atenciones',
        //         backgroundColor: '#42A5F5',
        //         borderColor: '#1E88E5',
        //         data: ingresos
        //       }
        //     ]
        //   };
        //   console.log(this.datarepo);
        //   this.sinfechas = false;
        //   this.reportetablas = true;
        //   // this.reportegrafico = true;
        // } else {
        //   this.toastr.error('No se pudo hacer la consulta');
        // }
      }, err => {
        this.toastr.error('Error Api Reporte Consolidado');
      }
    );
  }
  descargar() {
    const element = document.getElementById('parapdf');
    html2canvas(element).then(
      (canvas) => {
        const imgWidth = 208;
        // const pageheight = 295;
        const imgheight = canvas.height * imgWidth / canvas.width;
        const heightleft = imgheight;
        console.log(canvas);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, heightleft);
        pdf.save('reporteconsolidadocitas.pdf');
      }
    );
  }
}
