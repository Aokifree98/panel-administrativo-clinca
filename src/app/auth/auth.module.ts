import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// componentes
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { PasswordComponent } from './password/password.component';

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


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RecoverComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
  ]
})
export class AuthModule { }
