import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadoUsuarioComponent } from './dado-usuario/dado-usuario.component';


const routes: Routes = [
  { path: "dados-usuario/:id", component: DadoUsuarioComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
