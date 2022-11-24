import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { CadCupomComponent } from './cad-cupom/cad-cupom.component';
import { ListCupomComponent } from './list-cupom/list-cupom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeCupomComponent } from './home-cupom/home-cupom.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cupom', component: HomeCupomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
