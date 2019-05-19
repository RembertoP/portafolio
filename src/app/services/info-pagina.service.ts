import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';
import { EquipoPagina } from '../interfaces/equipo-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: EquipoPagina = {};
  cargada = false ;

  constructor( private http: HttpClient ) {
    console.log ('Servicio listo para su uso.');
    // leer archivo json
    /*this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((resp: InfoPagina) => {
       console.log (resp);
     // console.log (resp[ 'titulo' ]);
     // console.log (resp[ 'facebook' ]);
       console.log (resp.facebook); // funciona despues de haberle colocado la interface

       this.cargada =  true;
       this.info = resp ;
    });*/
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
      this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
           // console.log (resp);
           // this.cargada = true;
            this.info = resp ;
        });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-proy.firebaseio.com/equipo.json').subscribe((resp: EquipoPagina) => {
        // console.log (resp);
        this.cargada =  true;
        this.equipo = resp ;
      });
  }

}
