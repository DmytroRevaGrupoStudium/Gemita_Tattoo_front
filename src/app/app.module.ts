import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { MenuRopaComponent } from './menu-ropa/menu-ropa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TatuajesComponent } from './tatuajes/tatuajes.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { NuevoTatuajeComponent } from './nuevo-tatuaje/nuevo-tatuaje.component';
import { NuevoTipoProductoComponent } from './nuevo-tipo-producto/nuevo-tipo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuPrincipalComponent,
    VistaProductoComponent,
    MenuRopaComponent,
    ContactoComponent,
    TatuajesComponent,
    NuevoProductoComponent,
    NuevoTatuajeComponent,
    NuevoTipoProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
  nombreEmpresa: String = "Roma Tattoo's"
 }
