import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service'
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

  constructor(
    private listaService: ListService
  ) { }

  ngOnInit(): void {
  }

  pesquisaUsuario = '';
  pesquisa: boolean = false;
  usuarios: any[] = [];
  usuarioFiltrado: any;

  listaUsuario$ = this.listaService.user$.pipe(
    map( res => {
      this.usuarios = res;
      return res;
    }), catchError ( error => {
      console.log( error );
      return error;
    })
  );

  filtroUsuario () {
    let filtro = this.usuarios.filter((usuario) => {
      return usuario.name.toLowerCase() === this.pesquisaUsuario.toLocaleLowerCase();
    })

    let filtroEmail = this.usuarios.filter((usuario) => {
      return usuario.email.toLowerCase() === this.pesquisaUsuario.toLocaleLowerCase();
    })

    if (filtro.length > 0) {
      this.usuarioFiltrado = filtro;
      this.pesquisa = true;
      console.log(this.usuarioFiltrado)
    } else {
      this.pesquisa = false;
    }

    if (filtroEmail.length > 0) {
      this.usuarioFiltrado = filtroEmail;
      this.pesquisa = true;
      console.log(this.usuarioFiltrado)
    } else {
      this.pesquisa = false;
    }
  }

}
