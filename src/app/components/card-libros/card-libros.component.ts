import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
//import { Libro } from '../../models/libro';

@Component({
  selector: 'app-card-libros',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './card-libros.component.html',
  styleUrl: './card-libros.component.scss'
})
export class CardLibrosComponent {

/* libros: Libro[] = [
    { titulo: 'Libro 1', descripcion: 'Descripción del libro 1', imagen: 'ruta/a/imagen1.jpg' },
    { titulo: 'Libro 2', descripcion: 'Descripción del libro 2', imagen: 'ruta/a/imagen2.jpg' },
    { titulo: 'Libro 3', descripcion: 'Descripción del libro 3', imagen: 'ruta/a/imagen3.jpg' },
  ];

  // Simular más libros para mostrar al hacer clic
  masLibros: Libro[] = [
    { titulo: 'Libro 4', descripcion: 'Descripción del libro 4', imagen: 'ruta/a/imagen4.jpg' },
    { titulo: 'Libro 5', descripcion: 'Descripción del libro 5', imagen: 'ruta/a/imagen5.jpg' },
    { titulo: 'Libro 6', descripcion: 'Descripción del libro 6', imagen: 'ruta/a/imagen6.jpg' },
  ];

  mostrarMas: boolean = false;

  mostrarMasCards() {
    this.mostrarMas = !this.mostrarMas;
    if (this.mostrarMas) {
      this.libros.push(...this.masLibros);
    }
  }*/
}


