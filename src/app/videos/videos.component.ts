import { Component } from '@angular/core';


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  videoUrlLeft: string = 'ruta/del/video1.mp4'; // URL del video izquierdo
  videoUrlRight: string = 'ruta/del/video2.mp4'; // URL del video derecho

  constructor() { }
}

