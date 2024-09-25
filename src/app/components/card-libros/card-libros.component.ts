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

}


