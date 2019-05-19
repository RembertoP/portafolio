import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto [] = [];
  cargada = false ;

  constructor(private http: HttpClient) {
    this.cargarproductos();
  }

  private cargarproductos() {
    this.http.get('https://angular-html-proy.firebaseio.com/productos_idx.json').subscribe((resp: Producto []) => {
          console.log (resp);

          this.cargada = true;
          this.productos = resp ;

      });
}

}
