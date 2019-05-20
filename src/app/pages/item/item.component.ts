import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';  
import { ProductoDetalle } from '../../interfaces/producto-detalle-pagina.interfaces';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
// si se coloca de esta forma, la interface debe ser opcional
  // los atributos--> genera error en el constructor
  // se deja undefined y se valida con un ngif
  producto: ProductoDetalle;
  id: string;
  cargada = false ;

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
        this.productosService.getProducto(parametros[ 'id' ] ).subscribe((resp: ProductoDetalle ) => {
          console.log (parametros[ 'id' ]);
          this.id = parametros[ 'id' ];
          this.producto = resp;
          this.cargada = true;
      });
    });
  }

}
