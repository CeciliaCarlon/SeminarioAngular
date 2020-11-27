import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { electrodomesticoListComponent } from "./electrodomestico-list/electrodomesticoListComponent";
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { FormsModule } from '@angular/forms';
import { MabrexAboutComponent } from './mabrex-about/mabrex-about.component';
import { MabrexProductosComponent } from './mabrex-productos/mabrex-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    electrodomesticoListComponent,
    CarritoComprasComponent,
    MabrexAboutComponent,
    MabrexProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
