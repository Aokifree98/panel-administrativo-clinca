import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListDermatomaFrontal } from '../models/listdermatomafrontal';

@Injectable({
  providedIn: 'root'
})
export class DermatomafrontalService {
  apiUrl = this.wasa.apiUrlGlobal + '/dermatomafrontal';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getDermatomafrontals() {
    return this.http.get(`${this.apiUrl}`);
  }

  getDermatomafrontalCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/dolor/${codigo}`);
  }

  getDermatomafrontal(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteDermatomafrontal(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveDermatomafrontal( dermatomafrontal: ListDermatomaFrontal) {
    return this.http.post(`${this.apiUrl}/create`, dermatomafrontal);
  }

  updateDermatomafrontal(id: string|number, updateddermatomafrontal: ListDermatomaFrontal): Observable<ListDermatomaFrontal> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateddermatomafrontal);
  }
}
