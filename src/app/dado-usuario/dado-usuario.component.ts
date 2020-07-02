import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from './../services/list.service';

@Component({
  selector: 'app-dado-usuario',
  templateUrl: './dado-usuario.component.html',
  styleUrls: ['./dado-usuario.component.scss']
})
export class DadoUsuarioComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private usuarioService: ListService
  ) { }

  id: string = '';
  dadosUsuario: any = {};

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(this.id) {
      this.usuarioService.detalheUsuario(this.id).subscribe(
        success => {
          this.dadosUsuario = success;
        },
        error => {
          console.log(error)
        }
      )
    }
  }

}
