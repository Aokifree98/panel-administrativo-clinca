import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
// admin - usuario --> recontra importante
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
// esenciales de la empresa
// cliente
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
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
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { AnswerChatComponent } from './chat/answer-chat/answer-chat.component';
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
import { AddEspecialistaComponent } from './especialista/add-especialista/add-especialista.component';
import { ListEspecialistaComponent } from './especialista/list-especialista/list-especialista.component';
import { UpdateEspecialistaComponent } from './especialista/update-especialista/update-especialista.component';
import { CreateEspecialistaComponent } from './especialista/create-especialista/create-especialista.component';
import { EditDoctorEspecialistaComponent } from './especialista/edit-doctor-especialista/edit-doctor-especialista.component';
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
// componentes de los procesos:
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
// disponibilidad y reserva rapida
import { Subproceso1de7Component } from './procesos/proceso7/subproceso1de7/subproceso1de7.component';
import { Subproceso2de7Component } from './procesos/proceso7/subproceso2de7/subproceso2de7.component';
import { Subproceso3de7Component } from './procesos/proceso7/subproceso3de7/subproceso3de7.component';
import { Subproceso4de7Component } from './procesos/proceso7/subproceso4de7/subproceso4de7.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'banner',
        children: [
          {
            path: 'list',
            component: ListBannerComponent
          },
          {
            path: 'create',
            component: CreateBannerComponent
          },
          {
            path: 'update/:id',
            component: UpdateBannerComponent
          }
        ]
      },
      {
        path: 'numero',
        children: [
          {
            path: 'list',
            component: ListNumeroComponent
          },
          {
            path: 'create',
            component: CreateNumeroComponent
          },
          {
            path: 'update/:id',
            component: UpdateNumeroComponent
          }
        ]
      },
      {
        path: 'servicio',
        children: [
          {
            path: 'list',
            component: ListServicioComponent
          },
          {
            path: 'create',
            component: CreateServicioComponent
          },
          {
            path: 'update/:id',
            component: UpdateServicioComponent
          }
        ]
      },
      {
        path: 'doctor',
        children: [
          {
            path: 'list',
            component: ListDoctorComponent
          },
          {
            path: 'create',
            component: CreateDoctorComponent
          },
          {
            path: 'update/:id',
            component: UpdateDoctorComponent
          }
        ]
      },
      {
        path: 'especialidad',
        children: [
          {
            path: 'list',
            component: ListEspecialidadComponent
          },
          {
            path: 'create',
            component: CreateEspecialidadComponent
          },
          {
            path: 'update/:id',
            component: UpdateEspecialidadComponent
          }
        ]
      },
      {
        path: 'especialista',
        children: [
          {
            path: 'list',
            component: ListEspecialistaComponent
          },
          {
            path: 'create',
            component: CreateEspecialistaComponent
          },
          {
            path: 'update/:id',
            component: UpdateEspecialistaComponent
          },
          {
            path: 'doctor-edit/:id',
            component: EditDoctorEspecialistaComponent
          },
          {
            path: 'add/:id',
            component: AddEspecialistaComponent
          }
        ]
      },
      {
        path: 'horario',
        children: [
          {
            path: 'list',
            component: ListHorarioComponent
          },
          {
            path: 'create',
            component: CreateHorarioComponent
          },
          {
            path: 'update/:id',
            component: UpdateHorarioComponent
          }
        ]
      },
      // {
      //   path: 'antecedente',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListAntecedenteComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateAntecedenteComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateAntecedenteComponent
      //     }
      //   ]
      // },
      // {
      //   path: 'diagnostico',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListDiagnosticoComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateDiagnosticoComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateDiagnosticoComponent
      //     }
      //   ]
      // },
      // {
      //   path: 'tratamiento',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListTratamientoComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateTratamientoComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateTratamientoComponent
      //     }
      //   ]
      // },
      // {
      //   path: 'historial',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListHistorialComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateHistorialComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateHistorialComponent
      //     }
      //   ]
      // },
      // {
      //   path: 'episodio',
      //   children: [
      //     {
      //       path: 'list',
      //       component: ListEpisodioComponent
      //     },
      //     {
      //       path: 'create',
      //       component: CreateEpisodioComponent
      //     },
      //     {
      //       path: 'update/:id',
      //       component: UpdateEpisodioComponent
      //     }
      //   ]
      // },
      {
        path: 'laboratorio',
        children: [
          {
            path: 'list',
            component: ListLaboratorioComponent
          },
          {
            path: 'create',
            component: CreateLaboratorioComponent
          },
          {
            path: 'update/:id',
            component: UpdateLaboratorioComponent
          }
        ]
      },
      {
        path: 'valor',
        children: [
          {
            path: 'list',
            component: ListValorComponent
          },
          {
            path: 'create',
            component: CreateValorComponent
          },
          {
            path: 'update/:id',
            component: UpdateValorComponent
          }
        ]
      },
      {
        path: 'objetivo',
        children: [
          {
            path: 'list',
            component: ListObjetivoComponent
          },
          {
            path: 'create',
            component: CreateObjetivoComponent
          },
          {
            path: 'update/:id',
            component: UpdateObjetivoComponent
          }
        ]
      },
      {
        path: 'politica',
        children: [
          {
            path: 'list',
            component: ListPoliticaComponent
          },
          {
            path: 'create',
            component: CreatePoliticaComponent
          },
          {
            path: 'update/:id',
            component: UpdatePoliticaComponent
          }
        ]
      },
      {
        path: 'cliente',
        children: [
          {
            path: 'list',
            component: ListClienteComponent
          },
          {
            path: 'create',
            component: CreateClienteComponent
          },
          {
            path: 'update/:id',
            component: UpdateClienteComponent
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: 'list',
            component: ListAdminComponent
          },
          {
            path: 'create',
            component: CreateAdminComponent
          },
          {
            path: 'update/:id',
            component: UpdateAdminComponent
          },
        ]
      },
      {
        path: 'blog',
        children: [
          {
            path: 'list',
            component: ListBlogComponent
          },
          {
            path: 'create',
            component: CreateBlogComponent
          },
          {
            path: 'update/:id',
            component: UpdateBlogComponent
          },
        ]
      },
      {
        path: 'empresa',
        children: [
          {
            path: 'view',
            component: ViewEmpresaComponent
          },
          {
            path: 'update',
            component: UpdateEmpresaComponent
          },
        ]
      },
      {
        path: 'testimonio',
        children: [
          {
            path: 'list',
            component: ListTestimonioComponent
          },
          {
            path: 'create',
            component: CreateTestimonioComponent
          },
          {
            path: 'update/:id',
            component: UpdateTestimonioComponent
          },
        ]
      },
      {
        path: 'comentarios',
        children: [
          {
            path: 'listblog',
            component: ListBlogcomentarioComponent
          },
          {
            path: 'list/:id',
            component: ListComentarioComponent
          },
          {
            path: 'update/:id',
            component: UpdateComentarioComponent
          },
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: 'list',
            component: ListChatComponent,
            // component: WorkingComponent
          },
          {
            path: 'answer/:id',
            component: AnswerChatComponent
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            component: ListContactoComponent
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'reportes',
        children: [
          {
            path: 'list',
            component: ListareportesComponent
          },
          {
            path: 'reporte1',
            component: Reporte1Component
          },
          {
            path: 'reporte2',
            component: Reporte2Component
          },
          {
            path: 'reporte3',
            component: Reporte3Component
          },
          {
            path: 'reporte4',
            component: Reporte4Component
          },
        ]
      },
      {
        path: 'procesos',
        children: [
          {
            path: 'proceso1',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1Component
              },
              {
                path: 'subproceso2/:id/:cliente/:fecha',
                component: Subproceso2Component
              },
              {
                path: 'subproceso3',
                component: Subproceso3Component
              }
            ]
          },
          {
            path: 'proceso2',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de2Component
              },
              {
                path: 'subproceso2/:id/:fecha',
                component: Subproceso2de2Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de2Component
              },
            ]
          },
          {
            path: 'proceso3',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de3Component
              },
              {
                path: 'subproceso2',
                component: Subproceso2de3Component
              },
              {
                path: 'subproceso3',
                component: Subproceso3de3Component
              }
            ]
          },
          {
            path: 'proceso4',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de4Component
              }
            ]
          },
          {
            path: 'proceso5',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de5Component
              },
              {
                path: 'subproceso2/:id',
                component: Subproceso2de5Component
              }
            ]
          },
          {
            path: 'proceso6',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de6Component
              }
            ]
          },
          {
            path: 'proceso7',
            children: [
              {
                path: 'subproceso1',
                component: Subproceso1de7Component
              },
              {
                path: 'subproceso2/:horario/:fecha',
                component: Subproceso2de7Component
              },
              {
                path: 'subproceso3/:id',
                component: Subproceso3de7Component
              },
              {
                path: 'subproceso4/:id',
                component: Subproceso4de7Component
              },
            ]
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
