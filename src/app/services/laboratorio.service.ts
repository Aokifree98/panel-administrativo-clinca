import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Laboratorio } from '../models/laboratorio';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  apiUrl = this.wasa.apiUrlGlobal + '/laboratorio';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getLaboratorios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getLaboratorio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteLaboratorio(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveLaboratorio( Laboratorio: Laboratorio) {
    return this.http.post(`${this.apiUrl}/create`, Laboratorio);
  }

  updateLaboratorio(id: string|number, updatedLaboratorio: Laboratorio): Observable<Laboratorio> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedLaboratorio);
  }
}
