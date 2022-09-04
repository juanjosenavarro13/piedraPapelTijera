import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {
  manos = [
    {mano: 'vacio', img: '../../assets/vacio.png'},
    {mano: 'piedra', img: '../../assets/piedra.png'},
    {mano: 'papel', img: '../../assets/papel.png'},
    {mano: 'tijera', img: '../../assets/tijera.png'}
  ];

  jugadores = [
    {nombre:'Jugador 1', seleccion: 0, ganador: false},
    {nombre:'Jugador 2', seleccion: 0, ganador: false}
  ];

  manosSeleccionadas = false;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(jugador:number ,seleccionado:number){
    this.jugadores[jugador].seleccion = seleccionado;
    this.comprobar(this.jugadores[0], this.jugadores[1]);
  }

  private comprobar(jugador1:any,jugador2:any){
    this.manosSeleccionadas = this.jugadores[0].seleccion !== 0 && this.jugadores[1].seleccion !== 0
    if(this.manosSeleccionadas){
      // pidra vs papel
      if(jugador1.seleccion === 1 && jugador2.seleccion === 2){
        this.jugadores[1].ganador = true;
      }

      // pidra vs tijeras
      if(jugador1.seleccion === 1 && jugador2.seleccion === 3){
        this.jugadores[0].ganador = true;
      }

      // papel vs piedra
      if(jugador1.seleccion === 2 && jugador2.seleccion === 1){
        this.jugadores[0].ganador = true;
      }

      // papel vs tijeras
      if(jugador1.seleccion === 2 && jugador2.seleccion === 3){
        this.jugadores[1].ganador = true;
      }

      // tijeras vs piedra
      if(jugador1.seleccion === 3 && jugador2.seleccion === 1){
        this.jugadores[1].ganador = true;
      }

      // tijeras vs papel
      if(jugador1.seleccion === 3 && jugador2.seleccion === 2){
        this.jugadores[0].ganador = true;
      }

    }
  }

  reiniciar(){
    this.manosSeleccionadas = false;
    this.jugadores[0].seleccion = 0;
    this.jugadores[1].seleccion = 0;
  }

}