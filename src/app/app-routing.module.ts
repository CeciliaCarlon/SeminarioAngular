import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MabrexAboutComponent } from './mabrex-about/mabrex-about.component';
import { MabrexProductosComponent } from './mabrex-productos/mabrex-productos.component';

const routes: Routes = [
  {
    path: 'productos',
    component: MabrexProductosComponent,
  },
  {
    path: 'about',
    component: MabrexAboutComponent,
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
