import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ListaUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [
    ListaUsuarioComponent
  ]
})
export class SharedModule { }
