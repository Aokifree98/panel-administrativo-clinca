import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListCita } from '../models/listcita';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


  // para hacer las pruebas en localhost
  // debemos descomentar lo comentado y comentar los las lineas que llevan
  //  https://sleepy-cove-35277.herokuapp.com
  apiUrlcita = this.wasa.apiUrlGlobal + '/cita';
  apiUrlreserva = this.wasa.apiUrlGlobal + '/gmailreserva';
  apiUrlpostergacion = this.wasa.apiUrlGlobal + '/gmail/postergar';

  constructor(
    private http: HttpClient,
    private wasa: GlobalService
    ) { }

  getCitas() {
    return this.http.get(`${this.apiUrlcita}`);
  }

  getCita(id: string) {
    return this.http.get(`${this.apiUrlcita}/${id}`);
  }
  gettopayCita() {
    return this.http.get(`${this.apiUrlcita}/search/topay`);
  }

  getDisponibilidad(lafecha: string, especialista: string | number) {
    return this.http.get(`${this.apiUrlcita}/disponibilidad/${lafecha}/${especialista}`);
  }

  getHome(lafecha: string) {
    return this.http.get(`${this.apiUrlcita}/home/${lafecha}`);
  }

  getClientBooking(codigoclient: string) {
    return this.http.get(`${this.apiUrlcita}/search/client/${codigoclient}`);
  }

  getCitasfiltradas(especialista: string) {
    return this.http.get(`${this.apiUrlcita}/filtrodoctor/estado/${especialista}`);
  }

  getCitasFiltro(dia: string, especialista: string) {
    return this.http.get(`${this.apiUrlcita}/filtrohorario/${dia}/${especialista}`);
  }

  getCitaestado() {
    return this.http.get(`${this.apiUrlcita}/filtro/estado`);
  }

  saveCita(cita: ListCita) {
    return this.http.post(`${this.apiUrlcita}/create`, cita);
  }

  updateCita(id: string|number, updatedCita: ListCita): Observable<ListCita> {
    return this.http.put(`${this.apiUrlcita}/update/${id}`, updatedCita);
  }

  getSendreservation(
    codigo: string) {
    return this.http.get(`${this.apiUrlreserva}/${codigo}`);
  }

  getSendpostpone(
    codigo: string) {
    return this.http.get(`${this.apiUrlpostergacion}/${codigo}`);
  }

  deleteCita(id: string) {
    return this.http.delete(`${this.apiUrlcita}/${id}`);
  }




}
