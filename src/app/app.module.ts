import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { CadCupomComponent } from './cad-cupom/cad-cupom.component';
import { ListCupomComponent } from './list-cupom/list-cupom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeCupomComponent } from './home-cupom/home-cupom.component';


@NgModule({ 
  declarations: [
    AppComponent,
    MonitorComponent,
    CadCupomComponent,
    ListCupomComponent,
    DashboardComponent, 
    HomeCupomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
