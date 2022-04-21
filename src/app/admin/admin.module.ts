import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {
//   AppAsideModule,
//   AppBreadcrumbModule,
//   AppHeaderModule,
//   AppFooterModule,
//   AppSidebarModule,
// } from '@coreui/angular';

// // Import 3rd party components
// import { ChartsModule } from 'ng2-charts';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG  } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// para los reportes con barras :v
import {ChartModule} from 'primeng/chart';
// accordion and accordion tab
import {AccordionModule} from 'primeng/accordion';
// api
import {MenuItem} from 'primeng/api';
// cliente
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
// admin
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
// esenciales de la empresa
// empresa
import { ViewEmpresaComponent } from './empresa/view-empresa/view-empresa.component';
import { UpdateEmpresaComponent } from './empresa/update-empresa/update-empresa.component';
// contacto
import { ListContactoComponent } from './contacto/list-contacto/list-contacto.component';
// banner
import { ListBannerComponent } from './banner/list-banner/list-banner.component';
import { CreateBannerComponent } from './banner/create-banner/create-banner.component';
import { UpdateBannerComponent } from './banner/update-banner/update-banner.component';
// numero
import { ListNumeroComponent } from './numero/list-numero/list-numero.component';
import { CreateNumeroComponent } from './numero/create-numero/create-numero.component';
import { UpdateNumeroComponent } from './numero/update-numero/update-numero.component';
// objetivo
import { ListObjetivoComponent } from './objetivo/list-objetivo/list-objetivo.component';
import { CreateObjetivoComponent } from './objetivo/create-objetivo/create-objetivo.component';
import { UpdateObjetivoComponent } from './objetivo/update-objetivo/update-objetivo.component';
// politica
import { ListPoliticaComponent } from './politica/list-politica/list-politica.component';
import { CreatePoliticaComponent } from './politica/create-politica/create-politica.component';
import { UpdatePoliticaComponent } from './politica/update-politica/update-politica.component';
// valor
import { ListValorComponent } from './valor/list-valor/list-valor.component';
import { CreateValorComponent } from './valor/create-valor/create-valor.component';
import { UpdateValorComponent } from './valor/update-valor/update-valor.component';
// servicio
import { ListServicioComponent } from './servicio/list-servicio/list-servicio.component';
import { UpdateServicioComponent } from './servicio/update-servicio/update-servicio.component';
import { CreateServicioComponent } from './servicio/create-servicio/create-servicio.component';
// home
import { HomeComponent } from './home/home.component';
// testimonio
import { ListTestimonioComponent } from './testimonio/list-testimonio/list-testimonio.component';
import { CreateTestimonioComponent } from './testimonio/create-testimonio/create-testimonio.component';
import { UpdateTestimonioComponent } from './testimonio/update-testimonio/update-testimonio.component';
// blog
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { UpdateBlogComponent } from './blog/update-blog/update-blog.component';
// comentario
import { ListComentarioComponent } from './comentario/list-comentario/list-comentario.component';
import { UpdateComentarioComponent } from './comentario/update-comentario/update-comentario.component';
import { ListBlogcomentarioComponent } from './comentario/list-blogcomentario/list-blogcomentario.component';
// chat
import { ChatComponent } from './chat/chat/chat.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { AnswerChatComponent } from './chat/answer-chat/answer-chat.component';
// trabajando
import { WorkingComponent } from './working/working.component';
// componentes de la aplicacion
// doctor
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
// especialidad
import { ListEspecialidadComponent } from './especialidad/list-especialidad/list-especialidad.component';
import { UpdateEspecialidadComponent } from './especialidad/update-especialidad/update-especialidad.component';
import { CreateEspecialidadComponent } from './especialidad/create-especialidad/create-especialidad.component';
// especialista
import { ListEspecialistaComponent } from './especialista/list-especialista/list-especialista.component';
import { UpdateEspecialistaComponent } from './especialista/update-especialista/update-especialista.component';
import { CreateEspecialistaComponent } from './especialista/create-especialista/create-especialista.component';
// horario
import { ListHorarioComponent } from './horario/list-horario/list-horario.component';
import { CreateHorarioComponent } from './horario/create-horario/create-horario.component';
import { UpdateHorarioComponent } from './horario/update-horario/update-horario.component';
// episodio
import { ListEpisodioComponent } from './episodio/list-episodio/list-episodio.component';
import { UpdateEpisodioComponent } from './episodio/update-episodio/update-episodio.component';
import { CreateEpisodioComponent } from './episodio/create-episodio/create-episodio.component';
// laboratorio
import { ListLaboratorioComponent } from './laboratorio/list-laboratorio/list-laboratorio.component';
import { CreateLaboratorioComponent } from './laboratorio/create-laboratorio/create-laboratorio.component';
import { UpdateLaboratorioComponent } from './laboratorio/update-laboratorio/update-laboratorio.component';
// diagnostico
import { ListDiagnosticoComponent } from './diagnostico/list-diagnostico/list-diagnostico.component';
import { CreateDiagnosticoComponent } from './diagnostico/create-diagnostico/create-diagnostico.component';
import { UpdateDiagnosticoComponent } from './diagnostico/update-diagnostico/update-diagnostico.component';
// tratamiento
import { ListTratamientoComponent } from './tratamiento/list-tratamiento/list-tratamiento.component';
import { CreateTratamientoComponent } from './tratamiento/create-tratamiento/create-tratamiento.component';
import { UpdateTratamientoComponent } from './tratamiento/update-tratamiento/update-tratamiento.component';
// antecedente
import { ListAntecedenteComponent } from './antecedente/list-antecedente/list-antecedente.component';
import { CreateAntecedenteComponent } from './antecedente/create-antecedente/create-antecedente.component';
import { UpdateAntecedenteComponent } from './antecedente/update-antecedente/update-antecedente.component';
// historial
import { ListHistorialComponent } from './historial/list-historial/list-historial.component';
import { UpdateHistorialComponent } from './historial/update-historial/update-historial.component';
import { CreateHistorialComponent } from './historial/create-historial/create-historial.component';
// reportes
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { ListareportesComponent } from './reportes/listareportes/listareportes.component';
// procesos:
// reserva
import { Subproceso1Component } from './procesos/proceso1/subproceso1/subproceso1.component';
import { Subproceso2Component } from './procesos/proceso1/subproceso2/subproceso2.component';
import { Subproceso3Component } from './procesos/proceso1/subproceso3/subproceso3.component';
// postergacion
import { Subproceso1de2Component } from './procesos/proceso2/subproceso1de2/subproceso1de2.component';
import { Subproceso2de2Component } from './procesos/proceso2/subproceso2de2/subproceso2de2.component';
import { Subproceso3de2Component } from './procesos/proceso2/subproceso3de2/subproceso3de2.component';
// atencion
import { Subproceso1de3Component } from './procesos/proceso3/subproceso1de3/subproceso1de3.component';
import { Subproceso2de3Component } from './procesos/proceso3/subproceso2de3/subproceso2de3.component';
import { Subproceso3de3Component } from './procesos/proceso3/subproceso3de3/subproceso3de3.component';
// atencion reserva
import { Subproceso1de4Component } from './procesos/proceso4/subproceso1de4/subproceso1de4.component';
// atencion cliente
import { Subproceso1de5Component } from './procesos/proceso5/subproceso1de5/subproceso1de5.component';
import { Subproceso2de5Component } from './procesos/proceso5/subproceso2de5/subproceso2de5.component';
// confirmacion pago
import { Subproceso1de6Component } from './procesos/proceso6/subproceso1de6/subproceso1de6.component';
import { AddEspecialistaComponent } from './especialista/add-especialista/add-especialista.component';
import { EditDoctorEspecialistaComponent } from './especialista/edit-doctor-especialista/edit-doctor-especialista.component';
import { Subproceso1de7Component } from './procesos/proceso7/subproceso1de7/subproceso1de7.component';
import { Subproceso2de7Component } from './procesos/proceso7/subproceso2de7/subproceso2de7.component';
import { Subproceso3de7Component } from './procesos/proceso7/subproceso3de7/subproceso3de7.component';
import { Subproceso4de7Component } from './procesos/proceso7/subproceso4de7/subproceso4de7.component';
import { AddLaboratorioComponent } from './laboratorio/add-laboratorio/add-laboratorio.component';
import { AddAnalisisComponent } from './analisis/add-analisis/add-analisis.component';
import { CreateAnalisisComponent } from './analisis/create-analisis/create-analisis.component';
import { ListAnalisisComponent } from './analisis/list-analisis/list-analisis.component';
import { UpdateAnalisisComponent } from './analisis/update-analisis/update-analisis.component';


@NgModule(
  {
    declarations: [
      AdminComponent,
      CreateClienteComponent,
      UpdateClienteComponent,
      ListClienteComponent,
      CreateAdminComponent,
      UpdateAdminComponent,
      ListAdminComponent,
      Subproceso1Component,
      Subproceso2Component,
      Subproceso3Component,
      Subproceso1de2Component,
      Subproceso2de2Component,
      Subproceso3de2Component,
      ListareportesComponent,
      Reporte1Component,
      Reporte2Component,
      Reporte3Component,
      Reporte4Component,
      Subproceso1de3Component,
      Subproceso2de3Component,
      Subproceso3de3Component,
      CreateBlogComponent,
      ListBlogComponent,
      UpdateBlogComponent,
      WorkingComponent,
      CreateTestimonioComponent,
      ListTestimonioComponent,
      UpdateTestimonioComponent,
      HomeComponent,
      ViewEmpresaComponent,
      UpdateEmpresaComponent,
      ListChatComponent,
      AnswerChatComponent,
      ChatComponent,
      UpdateComentarioComponent,
      ListComentarioComponent,
      ListBlogcomentarioComponent,
      CreateBannerComponent,
      ListBannerComponent,
      UpdateBannerComponent,
      UpdateNumeroComponent,
      CreateNumeroComponent,
      ListNumeroComponent,
      ListObjetivoComponent,
      CreateObjetivoComponent,
      UpdateObjetivoComponent,
      UpdatePoliticaComponent,
      CreatePoliticaComponent,
      ListPoliticaComponent,
      ListContactoComponent,
      ListValorComponent,
      CreateValorComponent,
      UpdateValorComponent,
      UpdateServicioComponent,
      CreateServicioComponent,
      ListServicioComponent,
      ListDoctorComponent,
      CreateDoctorComponent,
      UpdateDoctorComponent,
      UpdateEspecialidadComponent,
      CreateEspecialidadComponent,
      ListEspecialidadComponent,
      ListAntecedenteComponent,
      CreateAntecedenteComponent,
      UpdateAntecedenteComponent,
      UpdateEpisodioComponent,
      CreateEpisodioComponent,
      ListEpisodioComponent,
      ListLaboratorioComponent,
      CreateLaboratorioComponent,
      UpdateLaboratorioComponent,
      UpdateEspecialistaComponent,
      CreateEspecialistaComponent,
      ListEspecialistaComponent,
      ListHorarioComponent,
      CreateHorarioComponent,
      UpdateHorarioComponent,
      CreateDiagnosticoComponent,
      UpdateDiagnosticoComponent,
      ListDiagnosticoComponent,
      ListTratamientoComponent,
      CreateTratamientoComponent,
      UpdateTratamientoComponent,
      UpdateHistorialComponent,
      ListHistorialComponent,
      CreateHistorialComponent,
      Subproceso1de4Component,
      Subproceso1de5Component,
      Subproceso2de5Component,
      Subproceso1de6Component,
      AddEspecialistaComponent,
      EditDoctorEspecialistaComponent,
      Subproceso1de7Component,
      Subproceso2de7Component,
      Subproceso3de7Component,
      Subproceso4de7Component,
      AddLaboratorioComponent,
      AddAnalisisComponent,
      CreateAnalisisComponent,
      ListAnalisisComponent,
      UpdateAnalisisComponent,
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      // primeng
      AccordionModule,
      ChartModule,
      ReactiveFormsModule,
      // AppAsideModule,
      // AppBreadcrumbModule.forRoot(),
      // AppHeaderModule,
      // AppFooterModule,
      // AppSidebarModule,
      // BsDropdownModule.forRoot(),
      // TabsModule.forRoot(),
      // ChartsModule,
      // PerfectScrollbarModule,
      ToastrModule.forRoot(),
    ],
    providers: [
      DatePipe,
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }
    ]
  }
)
export class AdminModule { }
