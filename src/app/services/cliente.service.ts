import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = this.wasa.apiUrlGlobal + '/cliente';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }

  getClientes() {
    return this.http.get(`${this.apiUrl}`);
  }

  getCliente(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getrecover(codigo: string) {
    return this.http.get(`${this.apiUrl}/${codigo}`);
  }

  getClientecorreo(correo: string) {
    return this.http.get(`${this.apiUrl}/searchcorreo/${correo}`);
  }
  getClientedoc(numero: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${numero}`);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveCliente(Cliente: Cliente) {
    return this.http.post(`${this.apiUrl}/create`, Cliente);
  }

  updateCliente(id: string|number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedCliente);
  }
}
