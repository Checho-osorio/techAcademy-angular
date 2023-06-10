import { Component } from "@angular/core";
import { AutosService } from "src/app/shared/autos.service";


@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent {


  tituloListaAutos: string = "Lista de Automóviles";

  muestraImagen: boolean = false

  anchoImagen= 120;
  margenImagen= 3;

  listaAutos: any[] = [];
  listaAutosFiltrados: any[] = []


  private _filtro: string = "";
  get filtro(): string {
    return this._filtro;
  }

  set filtro ( filtrarPor: string ){
    filtrarPor = filtrarPor.toLocaleLowerCase();
    this.listaAutosFiltrados = this.listaAutos.filter(
      (auto: any) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
    )
      console.log(filtrarPor);
  }

/*   ngOnInit(): void  {
    this.listaAutos = [
      {
        id: 1,
        marca: "Audi",
        modelo: "A4",
        anio: 2020,
        color: "Verde Claro",
        kilometros: 20500,
        calificacion: 4.4,
        precio: 2500000,
        imagenUrl: "assets/imageAutos/audi-a4-verde.jpg"
      },
      {
        id: 2,
        marca: "Mercedez Benz",
        modelo: "A1",
        anio: 2018,
        color: "Blanco",
        kilometros: 700,
        calificacion: 4,
        precio: 3500000,
        imagenUrl: "assets/imageAutos/audi-a4-verde.jpg"
      },
      {
        id: 3,
        marca: "Audi",
        modelo: "e-tron",
        anio: 2020,
        color: "Negro",
        kilometros: 40500,
        calificacion: 5,
        precio: 3000000,
        imagenUrl: "assets/imageAutos/audi-a4-verde.jpg"
      },
      {
        id: 4,
        marca: "Jaguar",
        modelo: "e-tron",
        anio: 2023,
        color: "Negro",
        kilometros: 0,
        calificacion: 2,
        precio: 5000000,
        imagenUrl: "assets/imageAutos/audi-a4-verde.jpg"
      }
    ];
    this.listaAutosFiltrados = this.listaAutos
  } */


  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion( mensaje:string) : void{
    alert("Dieron click en la calificacion: " + mensaje)
  }


  constructor( private _autosService:AutosService){}

  ngOnInit():void{
    this.listaAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.listaAutos
  }
}


