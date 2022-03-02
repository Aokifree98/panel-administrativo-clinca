import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  apiUrl = this.wasa.apiUrlGlobal + '/live/sport/report';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  // reporte numero 1
  getfield(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte1/${fecha1}/${fecha2}`);
  }
  // reporte numero 2
  getcustomer(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte2/${fecha1}/${fecha2}`);
  }

  // reporte numero 3
  getadmin(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte3/${fecha1}/${fecha2}`);
  }

  // reporte numero 3
  getgratis(fecha1: string, fecha2: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reporte4/${fecha1}/${fecha2}`);
  }
  // los demas reportes ...
}
