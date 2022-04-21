import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Analisis } from '../models/analisis';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {
  apiUrl = this.wasa.apiUrlGlobal + '/analisis';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAnalisiss() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAnalisisCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/examenes/${codigo}`);
  }

  getAnalisisFollow(codigo: string | number, estado: string) {
    return this.http.get(`${this.apiUrl}/gestion/${codigo}/${estado}`);
  }

  getAnalisis(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAnalisis(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAnalisis( analisis: Analisis) {
    return this.http.post(`${this.apiUrl}/create`, analisis);
  }

  updateAnalisis(id: string|number, updatedanalisis: Analisis): Observable<Analisis> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedanalisis);
  }
}
