import { Injectable } from '@angular/core';

interface Auto {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  kilometros: number;
  calificacion: number;
  precio: number;
  imagenUrl: string;
}

@Injectable({
  providedIn: "root"
})
export class AutosService {
  private listaAutos: Auto[];

  constructor() {
    this.listaAutos = this._determinaListaAutos();
  }

  obtenListaAutos(): Auto[] {
    return this.listaAutos;
  }

  obtenAuto(id: number): Auto {
    return this.listaAutos.find(auto => auto.id === id)!;
  }

  private _determinaListaAutos(): Auto[] {
    let listaAutos: Auto[] = [
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
    return listaAutos;
  }
}
