import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListDetalleCita } from '../models/Listdetallecita';

@Injectable({
  providedIn: 'root'
})
export class DetallecitacitaService {
  apiUrl = this.wasa.apiUrlGlobal + '/detallecita';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getDetalleCitas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getDetalleCitaCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/dolor/${codigo}`);
  }

  getDetalleCita(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteDetalleCita(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveDetalleCita( detalleCita: ListDetalleCita) {
    return this.http.post(`${this.apiUrl}/create`, detalleCita);
  }

  updateDetalleCita(id: string|number, updateddetalleCita: ListDetalleCita): Observable<ListDetalleCita> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateddetalleCita);
  }
}
