import { Title } from '@angular/platform-browser';

export interface Cita {
  id?: number,
  Appointment?: Date,
  Pay?: string,
  Type?: string,
  Condition?: string,
  Cardiacpressure?: string,
  Oxygenation?: string,
  Temperature?: string,
  Weight?: string,
  Size?: string,
  Companion?: string,
  Relationship?: string,
  Currentepisode?: string,
  Beginningprinciples?: string,
  Problem?: string,
  Examination?: string,
  AdminId?: number,
  ClienteId?: number,
  HorarioId?: number,
  admin:{
    id?: number,
    Name?: string,
    LastName?: string,
    Phone?: string,
    Email?: string,
    Photo?: string
  },
  cliente:{
    id?: number,
    Name?: string,
    LastName?: string,
    BirthDate?: Date,
    Job?: string,
    Direction?: string,
    Phone?: string,
    Gender?: string,
    CivilStatus?: string,
    DocumentNumber?: string,
    Email?: string,
    Photo?: string
  },
  horario:{
    id?: number,
    Day?: string,
    EspecialistaId?: number,
    HoraId?: number,
    especialista:{
      id?: number,
      Turn?: string,
      EspecialidadId?: number,
      DoctorId?: number,
      especialidad: {
        id?: number,
        Name?: string,
        Price?: number
      },
      doctor: {
        id?: number,
        Name?: string,
        LastName?: string,
        Email?: string,
      },
    },
    hora:{
      id?: number,
      Interval?: string,
      Start?: string,
      End?: string
    }
  }
}
