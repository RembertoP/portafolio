import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto-pagina.interfaces';
import { ProductoDetalle } from '../interfaces/producto-detalle-pagina.interfaces';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto [] = [];
  productosFiltrado: Producto [] = [];

  // producto: ProductoDetalle = {};
  cargada = false ;

  constructor(private http: HttpClient) {
    this.cargarproductos();
  }

  private cargarproductos() {
   return new Promise (( resolve , reject) => {
    this.http.get('https://angular-html-proy.firebaseio.com/productos_idx.json').subscribe((resp: Producto []) => {
          this.cargada = true;
          this.productos = resp ;
          resolve(); // cuando se ejecuta el resolve, significa que todo se ejecuto correctamente
      });
   });
}

public getProducto(id: string) {
  // retorno observable para que sea subcrito desde la pagina en donde se invoca
  return this.http.get(`https://angular-html-proy.firebaseio.com/productos/${id}.json`);
}

buscarProducto(termino: string) {
  if (this.productos.length === 0 ) {
    // cargar los productos
    this.cargarproductos().then( () => {
      // ejeuctar despues de terner los productos
      // aplicar filtro
      this.filtraProductos(termino);
    });
  } else {
    // aplicar filtro
    this.filtraProductos(termino);
  }
}

private filtraProductos(termino: string) {
  console.log('filtrar productos ', this.productos);

  termino = termino.toLowerCase();
  this.productosFiltrado = [];
  this.productos.forEach (prod => {
      const tiitulolower = prod.titulo.toLowerCase();
      const categorialower = prod.categoria.toLowerCase();

      if (categorialower.indexOf(termino) >= 0 || tiitulolower.indexOf(termino) >= 0 ) {
        this.productosFiltrado.push(prod);
      }
  });
}

}
