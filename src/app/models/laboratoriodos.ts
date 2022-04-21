import { Title } from '@angular/platform-browser';

export interface Laboratoriodos {
  id?: number,
  Name?: string,
  Detail?: string,
  Price?: number,
  Plurality?: string,
  TipoId?: number,
  tipo?: {
    id?: number,
    Name?: string,
  }
}
