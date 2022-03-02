import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListEspecialista } from '../models/listespecialista';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {
  apiUrl = this.wasa.apiUrlGlobal + '/especialista';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
    ) { }

  getEspecialistas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEspecialista(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteEspecialista(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  saveEspecialista(especialista: ListEspecialista) {
    return this.http.post(`${this.apiUrl}/create`, especialista);
  }

  updateEspecialista(id: string|number, updatedEspecialista: ListEspecialista): Observable<ListEspecialista> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedEspecialista);
  }
  // getBuscar(correo: string) {
  //   return this.http.get(`${this.apiUrldoctor}/search/${correo}`);
  // }
}
