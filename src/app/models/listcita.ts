import { Title } from '@angular/platform-browser';

export interface ListCita {
  id?: number,
  Appointment?: Date,
  Pay?: string,
  Type?: string,
  Condition?: string,
  Referred?: string,
  Companion?: string,
  Relationship?: string,
  BloodPressure?: string,
  HeartRate?: string,
  BreathingFrequency?: string,
  Temperature?: string,
  Saturation?: string,
  SignsandSymptoms?: string,
  DescriptionProblem?: string,
  SurgicalHistory?: string,
  MedicalHistory?: string,
  AllergicHistory?: string,
  PhysicalExam?: string,
  Diagnosis?: string,
  LaboratoryExam?: string,
  AdminId?: number,
  ClienteId?: number,
  HorarioId?: number,
}