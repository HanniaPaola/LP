import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card'; 
import { CardLibrosComponent } from './components/card-libros/card-libros.component';
import { VideosComponent } from './videos/videos.component';
import { CardTextoComponent } from './components/card-texto/card-texto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,  MatCardModule, CardLibrosComponent, VideosComponent, CardTextoComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard-proyecto';
}
